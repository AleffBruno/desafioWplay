import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1536780169294 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `folder` (`id` int NOT NULL AUTO_INCREMENT, `path` varchar(255) NOT NULL, `name` text NOT NULL, `creationDate` varchar(255) NOT NULL, `Owner` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `file` (`id` int NOT NULL AUTO_INCREMENT, `path` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `Extension` varchar(255) NOT NULL, `CreationDate` varchar(255) NOT NULL, `Owner` varchar(255) NOT NULL, `Size` varchar(255) NOT NULL, `folderId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `file` ADD CONSTRAINT `FK_3563fb0d3e9557359f541ac77da` FOREIGN KEY (`folderId`) REFERENCES `folder`(`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `file` DROP FOREIGN KEY `FK_3563fb0d3e9557359f541ac77da`");
        await queryRunner.query("DROP TABLE `file`");
        await queryRunner.query("DROP TABLE `folder`");
    }

}
