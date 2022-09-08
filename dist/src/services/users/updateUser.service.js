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
const user_entity_1 = require("../../entities/user.entity");
const AppError_1 = require("../../errors/AppError");
const bcryptjs_1 = require("bcryptjs");
const updateUserService = (id, { email, name, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(user_entity_1.User);
    const findUser = yield userRepository.findOneBy({
        id
    });
    if (!findUser) {
        throw new AppError_1.AppError('User not found', 404);
    }
    yield userRepository.update(id, {
        email: email ? email : findUser.email,
        name: name ? name : findUser.name,
        password: password ? yield (0, bcryptjs_1.hash)(password, 10) : findUser.password
    });
    const user = yield userRepository.findOneBy({
        id
    });
    return user;
});
exports.default = updateUserService;
