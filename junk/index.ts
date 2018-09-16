import * as fs from 'fs';
import * as Path from 'path';
const path = "C:/Users/ffela/Desktop/myPath"
import {Folder} from '../src/models/Folder';

var obj: {[k: string]: any} = {};
function showItems(path:any){
    fs.readdir(path,async function(err:Error,items:string[]){
        for (var i=0; i<items.length; i++) {
            var pathItem = path + '/' + items[i];
            //console.log(pathItem);
            if(fs.lstatSync(pathItem).isDirectory()) {
                obj.folder = showItems(pathItem);
                // fs.stat(pathItem,function(err,stats){
                //     //console.log(pathItem);
                // })
            }else{
                //arr.push(pathItem);
            }
        }
    })
}
showItems(path);

//console.log(obj);


function filewalker(dir:any, done:any) {
    //se vinhar o parametro de diretorio, seje filho dele ????
    //let results:any = [];
    let results: {[k: string]: any} = {};

    fs.readdir(dir, function(err, list) {
        //COLOQUE OS ATRIB AQUI
        let folder = new Folder();
        folder.name = "folder Name here";

        if (err) return done(err);

        var pending = list.length;

        if (!pending) return done(null, results);

        list.forEach(function(file){
            file = Path.resolve(dir, file);

            fs.stat(file, function(err, stat){
                // If directory, execute a recursive call
                if (stat && stat.isDirectory()) {
                    // Add directory to array [comment if you need to remove the directories from the array]
                    //results.push(file);
                    results.folder = file;

                    filewalker(file, function(err:any, res:any){
                        //results = results.concat(res);
                        results = Object.assign(res,results);
                        if (!--pending) done(null, results);
                    });
                } else {
                    //results.push(file);
                    results.file = file;

                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

filewalker("C:/Users/ffela/Desktop/myPath", function(err:any, data:any){
    if(err){
        throw err;
    }
    
    // ["c://some-existent-path/file.txt","c:/some-existent-path/subfolder"]
    console.log(data);
});