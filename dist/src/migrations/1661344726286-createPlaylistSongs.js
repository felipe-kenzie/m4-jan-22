"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlaylistSongs1661344726286 = void 0;
class createPlaylistSongs1661344726286 {
    constructor() {
        this.name = 'createPlaylistSongs1661344726286';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "playlist_songs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "playlistId" uuid, "songId" uuid, CONSTRAINT "PK_bd99fdcd269be0f3ad345340eb4" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "playlist_songs" ADD CONSTRAINT "FK_b417e94c5022d641c977ef85d8b" FOREIGN KEY ("playlistId") REFERENCES "playlists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "playlist_songs" ADD CONSTRAINT "FK_d6a09d42a96563d9d139b5f7fdf" FOREIGN KEY ("songId") REFERENCES "songs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "playlist_songs" DROP CONSTRAINT "FK_d6a09d42a96563d9d139b5f7fdf"`);
            yield queryRunner.query(`ALTER TABLE "playlist_songs" DROP CONSTRAINT "FK_b417e94c5022d641c977ef85d8b"`);
            yield queryRunner.query(`DROP TABLE "playlist_songs"`);
        });
    }
}
exports.createPlaylistSongs1661344726286 = createPlaylistSongs1661344726286;
