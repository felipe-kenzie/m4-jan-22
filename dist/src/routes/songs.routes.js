"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const songs_controllers_1 = require("../controllers/songs.controllers");
const ensureAuth_middleware_1 = require("../middlewares/ensureAuth.middleware");
const songsRoutes = (0, express_1.Router)();
songsRoutes.post('', ensureAuth_middleware_1.ensureAuthMiddleware, songs_controllers_1.createSongsController);
songsRoutes.get('', songs_controllers_1.listSongsController);
exports.default = songsRoutes;
