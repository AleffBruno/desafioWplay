//referencia : https://www.codediesel.com/nodejs/listing-files-using-glob-patterns-in-nodejs/

import * as fs from 'fs';
import * as Path from 'path';
const path = "C:/Users/ffela/Desktop/myPath"

import {Folder} from '../src/models/Folder';
import {File} from '../src/models/File';
import { S_IWUSR } from 'constants';

function returnPathName(){
    return "a";
}

function returnPathItems(path:any){
    let items = fs.readdirSync(path);

    let fileItems : any = [];
    let foldersAsItems : any = [];
    let folder : any = {};
    folder.name = path;

    let myFolder = new Folder();
    myFolder.name = Path.basename(path);
    myFolder.path = path;
    myFolder.creationDate = fs.statSync(path).birthtime.toString();
    //myFolder.owner = "a";
    
    for(let i = 0 ;i<items.length;i++){
        //let filePath = Path.resolve(path, items[i]); // retornando os caminhos com "\\" em vez de "/"
        let filePath = path + '/' + items[i];
        if(!fs.lstatSync(filePath).isDirectory()){
            let file = new File();
            file.name = Path.basename(filePath);

            fileItems.push(file);
            //fileItems.push(filePath);
        }else{
            //rItems.push(returnPathItems(filePath));
            //folder.folder = returnPathItems(filePath);
            foldersAsItems.push(returnPathItems(filePath));
            //myFolder.folders = returnPathItems(filePath);
        }
    }
    folder.folder = foldersAsItems;
    folder.files = fileItems;
    if(foldersAsItems.length > 0) {
        myFolder.folders = foldersAsItems;
    }
    myFolder.files = fileItems;

    //console.log(items);
    //return folder 
    return myFolder;
}

let arr : any = {
    name:returnPathName(),
    //items:returnPathItems(path)
};

//returnPathItems(path);
console.log(JSON.stringify(returnPathItems(path)));
//arr = JSON.stringify(arr); // {"name":"a","items":["a","b"]}
//console.log(arr);
//console.log({arr}); // { arr: '["a","b"]' }
//console.log(fs.statSync(path).S_IWUSR);
//console.log(Path.basename(path));

