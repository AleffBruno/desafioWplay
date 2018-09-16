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
            //console.log(pathItem);
            if(fs.lstatSync(pathItem).isDirectory()) {
                fs.stat(pathItem,function(err,stats){
                    console.log(pathItem);
                })
            }
        }
    })
}

function returnFolderItems(path:string,obj:any){
    fs.readdir(path,async function(err:Error,items:string[]){
        obj.nama = "a";
        obj.items = items;
        return obj;
        for (var i=0; i<items.length; i++) {
            var pathItem = path + '/' + items[i];
            if(!fs.lstatSync(pathItem).isDirectory()) {
                console.log(pathItem);
            }
        }

    })
}

let myObj :{[k:string]:any} = {};
console.log(returnFolderItems(path,myObj));


//returnFolderItems(path);
//console.log(returnFolderItems(path));