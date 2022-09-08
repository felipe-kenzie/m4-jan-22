"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentInfos_controllers_1 = require("../controllers/paymentInfos.controllers");
const ensureAuth_middleware_1 = require("../middlewares/ensureAuth.middleware");
const paymentInfoRoutes = (0, express_1.Router)();
paymentInfoRoutes.post('', ensureAuth_middleware_1.ensureAuthMiddleware, paymentInfos_controllers_1.createPaymentInfosController);
exports.default = paymentInfoRoutes;
