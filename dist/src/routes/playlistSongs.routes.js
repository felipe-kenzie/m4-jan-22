"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playlistSongs_controllers_1 = require("../controllers/playlistSongs.controllers");
const ensureAuth_middleware_1 = require("../middlewares/ensureAuth.middleware");
const playlistSongsRoutes = (0, express_1.Router)();
playlistSongsRoutes.post('', ensureAuth_middleware_1.ensureAuthMiddleware, playlistSongs_controllers_1.createPlaylistSongsController);
playlistSongsRoutes.get('/playlist/:id', ensureAuth_middleware_1.ensureAuthMiddleware, playlistSongs_controllers_1.listPlaylistSongsController);
playlistSongsRoutes.get('/songs/:id', ensureAuth_middleware_1.ensureAuthMiddleware, playlistSongs_controllers_1.listPlaylistSongsSongsController);
exports.default = playlistSongsRoutes;
