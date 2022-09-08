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
const song_entity_1 = require("../../entities/song.entity");
const playlist_entity_1 = require("../../entities/playlist.entity");
const playlistSongs_entity_1 = require("../../entities/playlistSongs.entity");
const AppError_1 = require("../../errors/AppError");
const createPlaylistSongsService = ({ idPlaylist, idSong }) => __awaiter(void 0, void 0, void 0, function* () {
    const songRepository = data_source_1.default.getRepository(song_entity_1.Song);
    const playlistRepository = data_source_1.default.getRepository(playlist_entity_1.Playlist);
    const playlistSongRepository = data_source_1.default.getRepository(playlistSongs_entity_1.PlaylistSongs);
    const playlist = yield playlistRepository.findOneBy({
        id: idPlaylist
    });
    const song = yield songRepository.findOneBy({
        id: idSong
    });
    if (!playlist || !song) {
        throw new AppError_1.AppError('Playlist or song not found', 404);
    }
    yield playlistSongRepository.save({
        playlist: playlist,
        song: song
    });
});
exports.default = createPlaylistSongsService;
