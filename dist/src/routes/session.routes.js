"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_controllers_1 = require("../controllers/session.controllers");
const sessionRoutes = (0, express_1.Router)();
sessionRoutes.post('', session_controllers_1.createSessionController);
exports.default = sessionRoutes;
