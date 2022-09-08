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
const createUser_service_1 = __importDefault(require("../../services/users/createUser.service"));
const data_source_1 = __importDefault(require("../../data-source"));
describe('Testando services de user', () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.default.initialize().then((res) => {
            connection = res;
        }).catch((error) => {
            console.log(error);
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    test('Deve ser capaz de criar um novo usuário', () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            email: 'fabio@kenzie.com.br',
            isAdm: true,
            name: 'Fabio',
            password: '1234'
        };
        const result = yield (0, createUser_service_1.default)(userData);
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("password");
        expect(result.password).not.toBe(userData.password);
    }));
    test('Não deve ser capaz de criar um usuário sem password', () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            email: 'fabio@kenzie.com.br',
            isAdm: true,
            name: 'Fabio'
        };
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, createUser_service_1.default)(userData);
        })).rejects.toThrow('Password is a required field');
    }));
});
