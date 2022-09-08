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
exports.listPlaylistSongsSongsController = exports.listPlaylistSongsController = exports.createPlaylistSongsController = void 0;
const createPlaylistSongs_service_1 = __importDefault(require("../services/playlistSongs/createPlaylistSongs.service"));
const listPlaylistSongs_service_1 = __importDefault(require("../services/playlistSongs/listPlaylistSongs.service"));
const listPlaylistSongsSongs_service_1 = __importDefault(require("../services/playlistSongs/listPlaylistSongsSongs.service"));
const createPlaylistSongsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPlaylist, idSong } = req.body;
    yield (0, createPlaylistSongs_service_1.default)({ idPlaylist, idSong });
    return res.status(201).json({
        message: 'Song created with success'
    });
});
exports.createPlaylistSongsController = createPlaylistSongsController;
const listPlaylistSongsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const playlistSongs = yield (0, listPlaylistSongs_service_1.default)(id);
    return res.json(playlistSongs);
});
exports.listPlaylistSongsController = listPlaylistSongsController;
const listPlaylistSongsSongsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const playlistSongs = yield (0, listPlaylistSongsSongs_service_1.default)(id);
    return res.json(playlistSongs);
});
exports.listPlaylistSongsSongsController = listPlaylistSongsSongsController;
