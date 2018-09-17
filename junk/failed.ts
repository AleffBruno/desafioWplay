//referencia : https://www.codediesel.com/nodejs/listing-files-using-glob-patterns-in-nodejs/

import * as fs from 'fs';
import * as Path from 'path';
const path = "C:/Users/ffela/Desktop/myPath"

import {Folder} from '../src/models/Folder';
import {File} from '../src/models/File';

function returnPathName(){
    return "a";
}

function returnPathItems(path:any){
    let items = fs.readdirSync(path);

    let fileItems : any = [];
    let folder : any = {};
    folder.name = path;

    let myFolder = new Folder();
    myFolder.name = Path.basename(path);
    myFolder.path = path;
    
    for(let i = 0 ;i<items.length;i++){
        //let filePath = Path.resolve(path, items[i]); // retornando os caminhos com "\\" em vez de "/"
        let filePath = path + '/' + items[i];
        if(!fs.lstatSync(filePath).isDirectory()){
            fileItems.push(filePath);
        }else{
            //rItems.push(returnPathItems(filePath));
            folder.folder = returnPathItems(filePath);
        }
    }
    folder.files = fileItems;
    //console.log(items);
    return folder 
}

let arr : any = {
    name:returnPathName(),
    //items:returnPathItems(path)
};

//returnPathItems(path);
//console.log(JSON.stringify(returnPathItems(path)));
//arr = JSON.stringify(arr); // {"name":"a","items":["a","b"]}
//console.log(arr);
//console.log({arr}); // { arr: '["a","b"]' }
fs.stat(path,function(err,stat){
    console.log(path);
    console.log(stat.birthtime);
});

