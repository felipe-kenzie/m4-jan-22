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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const data_source_1 = __importDefault(require("../../data-source"));
const userData = {
    email: 'felipe@kenzie.com.br',
    isAdm: true,
    name: 'Felipe',
    password: '1234'
};
let userCreated = {};
const userDataWithoutPassword = {
    email: 'felipe@kenzie.com.br',
    isAdm: true,
    name: 'Felipe'
};
const userLoginData = {
    email: 'felipe@kenzie.com.br',
    password: '1234'
};
let token = '';
describe('Testando rotas de user', () => {
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
    test('POST /users - Deve ser capaz de criar um novo usuário quando for passado os dados corretamente', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/users').send(userData);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body).not.toHaveProperty('password');
        userCreated = response.body;
    }));
    test('POST /users - Deve retornar um erro caso não seja passada a password ao criar um usuário', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/users').send(userDataWithoutPassword);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    }));
    test('POST /login - Deve retornar um token ao fazer o login com as credenciais válidas', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/login').send(userLoginData);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
        token = response.body.token;
    }));
    test('GET /users - Deve retornar um erro ao tentar listar usuários ao passar o token inválido', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/users').set('Authorization', 'Bearer 1234');
        expect(response.status).toBe(401);
    }));
    test('GET /users - Deve retornar todos os usuários caso seja passado um token válido', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/users').set('Authorization', `Bearer ${token}`);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(1);
        expect(response.body[0]).toMatchObject(userCreated);
    }));
});
