

import * as fs from 'fs';
import * as Path from 'path';
import {Folder} from '../models/Folder';
import {File} from '../models/File';
import * as shell from 'shelljs';


export class FolderRepository {

    listFolderRecursively(path:string) : Folder {
        //alguns consoles.log sao executados mostrando os nomes dos donos dos arquivos
        //por causa do comando executado ao procurar o 'owner' dos arquivos

        let allItems = fs.readdirSync(path); //get all items inside path
        let allFilesItems : File[] = []; //array to assign with files
        let allFoldersitems : Folder[] = []; //array to assign with folders

        let folder = new Folder();
        folder.name = Path.basename(path);
        folder.path = path;
        folder.creationDate = fs.statSync(path).birthtime.toString();
        //folder.owner = shell.exec("stat -c '%U' "+path).stdout.replace('\n','');


        for(let i = 0 ;i<allItems.length;i++){
            let filePath = path + '/' + allItems[i];
            if(!fs.lstatSync(filePath).isDirectory()){
                let file = new File();
                file.name = Path.basename(filePath);
                file.path = filePath;
                file.extension = Path.extname(filePath);
                file.creationDate = fs.statSync(filePath).birthtime.toString();
                file.size = fs.statSync(filePath).size.toString();
                //file.owner = shell.exec("stat -c '%U' "+path).stdout.replace('\n','');
                
                allFilesItems.push(file);
            }else{
                allFoldersitems.push(this.listFolderRecursively(filePath));
            }
        }

        folder.folders = allFoldersitems;
        folder.files = allFilesItems;

        return folder;
    }
}