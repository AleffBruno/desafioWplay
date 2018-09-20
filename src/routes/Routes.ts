import * as express from 'express';

import { FolderController } from '../controllers/FolderController';


export class Routes {

    public folderController : FolderController = new FolderController(); 

    public routes(app : express.Application) : void {

        app.post("/list",this.folderController.list);

        app.get("/",(req,res)=>{
            res.send("a");
        });

    }
}