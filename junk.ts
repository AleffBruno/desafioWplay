import * as fs from 'fs';
import "reflect-metadata";
import * as Path from 'path';

//import {Folder} from '../src/models/Folder';
import {File} from './src/models/File';

//const path = "C:/Users/ffela/Desktop/myPath"
const path = "C:/Users/f1608101/Desktop/myPath";

let arr:Array<File> = [];

function readFolderRecursively(path:string) {
    fs.readdir(path,async function(err:Error,items:string[]){
        //console.log(items);
        for (var i=0; i<items.length; i++) {
            var pathItem = path + '/' + items[i];

            //console.log(pathItem);
            if(!fs.lstatSync(pathItem).isDirectory()) {
                //console.log(pathItem);
                fs.stat(pathItem,infoFilecallback(pathItem))
            }
        }
        console.log(arr);
    })
}

function infoFilecallback(incomingPathFile:string) {
    return function(err:Error, stats:fs.Stats) {
            let file = new File();
            file.name = Path.basename(incomingPathFile);
            file.path = incomingPathFile;
            file.size = stats.size.toString();
            file.creationDate = stats.birthtime.toString();
            file.extension = Path.extname(incomingPathFile);
            arr.push(file);
            //console.log(file);
            //console.log(incomingPathFile);
            //console.log(stats.size);
        }
}

readFolderRecursively(path);