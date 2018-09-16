//referencia : https://www.codediesel.com/nodejs/listing-files-using-glob-patterns-in-nodejs/

import * as fs from 'fs';
import * as Path from 'path';
const path = "C:/Users/ffela/Desktop/myPath"

function returnPathName(){
    return "a";
}

function returnPathItems(path:any){
    let items = fs.readdirSync(path);
    let rItems : any = [];
    
    for(let i = 0 ;i<items.length;i++){
        //let filePath = Path.resolve(path, items[i]); // retornando os caminhos com "\\" em vez de "/"
        let filePath = path + '/' + items[i];
        if(!fs.lstatSync(filePath).isDirectory()){
            rItems.push(filePath);
        }else{
            rItems.push(returnPathItems(filePath));
        }
    }
    //console.log(items);
    return rItems 
}

let arr : any = {
    name:returnPathName(),
    //items:returnPathItems(path)
};

//returnPathItems(path);
console.log(returnPathItems(path));
//arr = JSON.stringify(arr); // {"name":"a","items":["a","b"]}
//console.log(arr);
//console.log({arr}); // { arr: '["a","b"]' }