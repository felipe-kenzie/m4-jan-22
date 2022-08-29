import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/AppError'
import { IUserUpdateRequest } from '../../interfaces/users.interfaces'
import { hash } from 'bcryptjs'

const updateUserService = async(id: string, {email, name, password}: IUserUpdateRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id
    })

    if(!findUser){
        throw new AppError('User not found', 404)
    }

    await userRepository.update(
        id,
        {
            email: email ? email : findUser.email,
            name: name ? name : findUser.name,
            password: password ? await hash(password, 10) : findUser.password
        }
    )

    const user = await userRepository.findOneBy({
        id
    })

    return user!

}

export default updateUserService