import * as express from 'express';

import { FolderController } from '../controllers/FolderController';


export class Routes {

    public folderController : FolderController = new FolderController(); 


    public routes(app : express.Application) : void {

        app.post("/",this.folderController.list);

    }
}