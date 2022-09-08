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
const playlist_entity_1 = require("../../entities/playlist.entity");
const playlistSongs_entity_1 = require("../../entities/playlistSongs.entity");
const AppError_1 = require("../../errors/AppError");
const listPlaylistSongsService = (idPlaylist) => __awaiter(void 0, void 0, void 0, function* () {
    const playlistSongsRepository = data_source_1.default.getRepository(playlistSongs_entity_1.PlaylistSongs);
    const playlistRepository = data_source_1.default.getRepository(playlist_entity_1.Playlist);
    const playlist = yield playlistRepository.findOne({
        where: {
            id: idPlaylist
        },
        relations: {
            playlistSongs: true
        }
    });
    if (!playlist) {
        throw new AppError_1.AppError('Playlist not found', 404);
    }
    return playlist;
});
exports.default = listPlaylistSongsService;
