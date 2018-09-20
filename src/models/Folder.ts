import {File} from "./File";
export class Folder {
    path!: string;

    name!: string;

    creationDate!: string;

    // owner!: string;

    folders!: Folder[];

    files!: File[];
}