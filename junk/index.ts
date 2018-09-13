//var fs = require('fs');
import * as fs from 'fs';
import "reflect-metadata";
import * as Path from 'path';

import {Folder} from '../src/models/Folder';
import {File} from '../src/models/File';

const path = "C:/Users/ffela/Desktop/myPath"

// fs.readdir(path,function(err,items){
            
//     for (var i=0; i<items.length; i++) {
//         console.log(items[i]);
//         //var file = path + '\\' + items[i]; 2 barras invertidas se tiver local no windows
//         var file = path + '/' + items[i];
//         console.log('Start '+file);
//         console.log(fs.lstatSync(file).isDirectory());
//         if(fs.lstatSync(file).isDirectory()) {
//             fs.readdir(file,function(err,items){
//                 for (var j=0; j<items.length; j++) {
//                     console.log(items[j]);
//                     var subFile = file + '/' + items[j];
//                     console.log(fs.lstatSync(subFile).isDirectory());
//                 }
//             })
//         }
//     }
// })

function readFolderRecursively(path:string) {
    fs.readdir(path,async function(err:Error,items:string[]){
        for (var i=0; i<items.length; i++) {
            var pathItem = path + '/' + items[i];
            //console.log(items[i]);

            if(fs.lstatSync(pathItem).isDirectory() == false){
                console.log(pathItem);
                let file = new File();
                fs.stat(pathItem,(err,status) => {
                    file.path = pathItem;
                    file.name = items[i];
                    file.extension = Path.extname(pathItem);
                    console.log(file);
                });
                //await fs.stat(pathItem,fileSize_callback(pathItem))
                
                //file.CreationDate = pathItem.
            }

            //var pathItem = path + '/' + items[i];
            if(fs.lstatSync(pathItem).isDirectory()) {
                let folder = new Folder();
                folder.path = pathItem;
                folder.name = items[i];
                folder.creationDate = "TEM NAO"; // arrumar jaja
                folder.owner = "TEM NAO";
                
                //readFolderRecursively(pathItem);
                //console.log(folder);
            }
        }
    })
}

function fileSize_callback(file:string) {
    return function(err:Error, stats:any) {
            // console.log(file);
            // console.log(stats["size"]);
            console.log(file+" tem o tamanho de : ");
            console.log(stats.size);
        }
};
 
readFolderRecursively(path);



//      C:/Users/ffela/Desktop/myPath/subpasta/disco100_SOLVED.txt
//      C:\Users\ffela\Desktop\myPath\disco100_SOLVED.txt