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
exports.updateUserController = exports.listUserController = exports.createUserController = void 0;
const createUser_service_1 = __importDefault(require("../services/users/createUser.service"));
const listUser_service_1 = __importDefault(require("../services/users/listUser.service"));
const class_transformer_1 = require("class-transformer");
const updateUser_service_1 = __importDefault(require("../services/users/updateUser.service"));
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, isAdm, name, password } = req.body;
    const user = yield (0, createUser_service_1.default)({ email, isAdm, name, password });
    return res.status(201).json((0, class_transformer_1.instanceToPlain)(user));
});
exports.createUserController = createUserController;
const listUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, listUser_service_1.default)();
    const id = req.user.id;
    console.log(id);
    return res.json((0, class_transformer_1.instanceToPlain)(users));
});
exports.listUserController = listUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { email, name, password } = req.body;
    const updatedUser = yield (0, updateUser_service_1.default)(id, { email, name, password });
    return res.json(updatedUser);
});
exports.updateUserController = updateUserController;
