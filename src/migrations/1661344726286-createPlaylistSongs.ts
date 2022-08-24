import { MigrationInterface, QueryRunner } from "typeorm";

export class createPlaylistSongs1661344726286 implements MigrationInterface {
    name = 'createPlaylistSongs1661344726286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "playlist_songs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "playlistId" uuid, "songId" uuid, CONSTRAINT "PK_bd99fdcd269be0f3ad345340eb4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "playlist_songs" ADD CONSTRAINT "FK_b417e94c5022d641c977ef85d8b" FOREIGN KEY ("playlistId") REFERENCES "playlists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "playlist_songs" ADD CONSTRAINT "FK_d6a09d42a96563d9d139b5f7fdf" FOREIGN KEY ("songId") REFERENCES "songs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "playlist_songs" DROP CONSTRAINT "FK_d6a09d42a96563d9d139b5f7fdf"`);
        await queryRunner.query(`ALTER TABLE "playlist_songs" DROP CONSTRAINT "FK_b417e94c5022d641c977ef85d8b"`);
        await queryRunner.query(`DROP TABLE "playlist_songs"`);
    }

}
