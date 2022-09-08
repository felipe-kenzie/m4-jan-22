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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const playlistSongs_entity_1 = require("../../entities/playlistSongs.entity");
const song_entity_1 = require("../../entities/song.entity");
const AppError_1 = require("../../errors/AppError");
const listPlaylistSongsSongsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const songRepository = data_source_1.default.getRepository(song_entity_1.Song);
    const findSong = yield songRepository.findOneBy({
        id
    });
    if (!findSong) {
        throw new AppError_1.AppError('Song not found', 404);
    }
    const playlistSongs = yield data_source_1.default.getRepository(playlistSongs_entity_1.PlaylistSongs).createQueryBuilder("playlistSongs").
        innerJoinAndSelect("playlistSongs.song", "song").
        innerJoinAndSelect("playlistSongs.playlist", "playlist").
        select(["playlistSongs.createdAt", "playlist.name", "playlist.id"]).
        where("song.id = :id", { id }).
        getMany();
    return playlistSongs;
});
exports.default = listPlaylistSongsSongsService;
