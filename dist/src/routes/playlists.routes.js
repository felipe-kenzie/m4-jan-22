"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playlists_controllers_1 = require("../controllers/playlists.controllers");
const ensureAuth_middleware_1 = require("../middlewares/ensureAuth.middleware");
const playlistsRoutes = (0, express_1.Router)();
playlistsRoutes.post('', ensureAuth_middleware_1.ensureAuthMiddleware, playlists_controllers_1.createPlaylistsController);
playlistsRoutes.get('', playlists_controllers_1.listPlaylistsController);
exports.default = playlistsRoutes;
