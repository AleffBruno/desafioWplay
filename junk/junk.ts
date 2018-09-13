import * as fs from 'fs';
import "reflect-metadata";
import * as Path from 'path';

import {Folder} from '../src/models/Folder';
import {File} from '../src/models/File';

const path = "C:/Users/ffela/Desktop/myPath"

function readFolderRecursively(path:string) {
    fs.readdir(path,async function(err:Error,items:string[]){
        for (var i=0; i<items.length; i++) {
            var pathItem = path + '/' + items[i];
            console.log(pathItem);
            if(fs.lstatSync(pathItem).isDirectory()) {
                fs.stat(pathItem,function(err,stats){
                    console.log(pathItem);
                })
            }
        }
    })
}

readFolderRecursively(path);