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
exports.listPlaylistsController = exports.createPlaylistsController = void 0;
const createPlaylists_service_1 = __importDefault(require("../services/playlists/createPlaylists.service"));
const listPlaylists_service_1 = __importDefault(require("../services/playlists/listPlaylists.service"));
const class_transformer_1 = require("class-transformer");
const createPlaylistsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const { name } = req.body;
    const playlist = yield (0, createPlaylists_service_1.default)(name, id);
    return res.status(201).json(playlist);
});
exports.createPlaylistsController = createPlaylistsController;
const listPlaylistsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playlists = yield (0, listPlaylists_service_1.default)();
    return res.json((0, class_transformer_1.instanceToPlain)(playlists));
});
exports.listPlaylistsController = listPlaylistsController;
