import createUserService from '../../services/users/createUser.service'
import { IUserRequest } from '../../interfaces/users.interfaces'
import AppDataSource from '../../data-source'
import { DataSource } from 'typeorm'

describe('Testando services de user', () => {

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
    
    test('Deve ser capaz de criar um novo usuário', async () => {
        const userData: IUserRequest = {
            email: 'fabio@kenzie.com.br',
            isAdm: true,
            name: 'Fabio',
            password: '1234'
        }

        const result = await createUserService(userData)

        expect(result).toHaveProperty("id")
        expect(result).toHaveProperty("password")
        expect(result.password).not.toBe(userData.password)
    })

    test('Não deve ser capaz de criar um usuário sem password', async() => {
        const userData: IUserRequest = {
            email: 'fabio@kenzie.com.br',
            isAdm: true,
            name: 'Fabio'
        }

        expect(async ()=>{
            await createUserService(userData)
        }).rejects.toThrow('Password is a required field')
    })

})