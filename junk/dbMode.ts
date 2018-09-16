import * as fs from 'fs';
import * as Path from 'path';
const path = "C:/Users/ffela/Desktop/myPath"

function select(path:any){
    fs.readdirSync(path,function(err:any,items:any){
        console.log(items);
    });
}

//console.log(select(path));