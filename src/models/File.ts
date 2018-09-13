import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Folder} from "./Folder";


@Entity()
export class File {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    path!: string;

    @Column()
    name!: string;

    @Column()
    extension!: string;

    @Column()
    creationDate!: string;

    @Column()
    owner !: string;

    @Column()
    size!: string;

    @ManyToOne(type => Folder, author => author.files)
    folder!: Folder;
}