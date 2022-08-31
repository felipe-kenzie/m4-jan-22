import request from 'supertest'
import app from '../../app'
import { DataSource } from 'typeorm'
import AppDataSource from '../../data-source'
import { IUserRequest } from '../../interfaces/users.interfaces'
import { IUserSessionRequest } from '../../interfaces/users.interfaces'

const userData: IUserRequest = {
    email: 'felipe@kenzie.com.br',
    isAdm: true,
    name: 'Felipe',
    password:  '1234'
}

let userCreated = {}

const userDataWithoutPassword = {
    email: 'felipe@kenzie.com.br',
    isAdm: true,
    name: 'Felipe'
}

const userLoginData: IUserSessionRequest = {
    email: 'felipe@kenzie.com.br',
    password: '1234'
}

let token: string = ''

describe('Testando rotas de user', () => {

    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((error) => {
            console.log(error)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test('POST /users - Deve ser capaz de criar um novo usuário quando for passado os dados corretamente', async() => {

        const response = await request(app).post('/users').send(userData)

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id')
        expect(response.body).not.toHaveProperty('password')
        userCreated = response.body

    })

    test('POST /users - Deve retornar um erro caso não seja passada a password ao criar um usuário', async() => {

        const response = await request(app).post('/users').send(userDataWithoutPassword)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('error')
    })

    test('POST /login - Deve retornar um token ao fazer o login com as credenciais válidas', async() => {
        const response = await request(app).post('/login').send(userLoginData)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('token')
        token = response.body.token
    })

    test('GET /users - Deve retornar um erro ao tentar listar usuários ao passar o token inválido', async() => {
        const response = await request(app).get('/users').set('Authorization', 'Bearer 1234')

        expect(response.status).toBe(401)
    })

    test('GET /users - Deve retornar todos os usuários caso seja passado um token válido', async() => {
        const response = await request(app).get('/users').set('Authorization', `Bearer ${token}`)

        expect(response.body).toBeInstanceOf(Array)
        expect(response.body.length).toBe(1)
        expect(response.body[0]).toMatchObject(userCreated)
    })

})