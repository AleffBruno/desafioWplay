import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {File} from "./File";


@Entity()
export class Folder {

    // @PrimaryGeneratedColumn()
    // id!: number;

    @Column()
    path!: string;

    @Column("text")
    name!: string;

    @Column()
    creationDate!: string;

    @Column()
    owner!: string;

    @Column()
    folders!: Folder[];

    @OneToMany(type => File, file => file.folder) // note: we will create author property in the Photo class below
    files!: File[];
}