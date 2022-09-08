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
exports.listSongsController = exports.createSongsController = void 0;
const createSongs_service_1 = __importDefault(require("../services/songs/createSongs.service"));
const listSongs_service_1 = __importDefault(require("../services/songs/listSongs.service"));
const createSongsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { artist, duration, name } = req.body;
    const song = yield (0, createSongs_service_1.default)({ artist, duration, name });
    return res.status(201).json(song);
});
exports.createSongsController = createSongsController;
const listSongsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const songs = yield (0, listSongs_service_1.default)();
    return res.json(songs);
});
exports.listSongsController = listSongsController;
