import {Request,Response} from 'express';
import {FolderRepository} from '../repositories/FolderRepository';
export class FolderController {

    async list(req:Request,res:Response) {
        let folderRepository = new FolderRepository();

        let folder = await folderRepository.listFolderRecursively(req.body.path);
        res.send({folder:folder});
    }
}