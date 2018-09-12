



import {Request,Response} from 'express';
var fs = require('fs');


export class FolderController {
    list(req:Request,res:Response) {

        const path = req.body.path;
        let fileArr : Array<string> = [];

        fs.readdir(path,function(err: Error,items: Array<string>){
            
            for (var i=0; i<items.length; i++) {
                //console.log(items[i]);
                //var file = path + '\\' + items[i]; 2 barras invertidas se tiver local no windows
                var file = path + '/' + items[i];
                console.log('Start '+file);
                fileArr.push(file);
            }
            res.send({message:fileArr});
        })
    }
}