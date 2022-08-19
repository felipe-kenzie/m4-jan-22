import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserRequest } from '../../interfaces/users.interfaces'
import { hash } from 'bcryptjs'
import { AppError } from '../../errors/AppError'

const createUserService = async ({email, isAdm, name, password}: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    if(!password){
        throw new AppError("Password is a required field")
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        isAdm,
        password: hashedPassword
    })

    await userRepository.save(user)

    return user

}

export default createUserService