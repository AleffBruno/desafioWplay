import {Folder} from "./Folder";

export class File {
    //id!: number;

    path!: string;

    name!: string;

    extension!: string;

    creationDate!: string;

    // owner !: string;

    size!: string;

    folder!: Folder;
}