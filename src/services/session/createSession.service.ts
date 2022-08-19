import AppDataSource from '../../data-source'
import { compare } from 'bcryptjs'
import { AppError } from '../../errors/AppError'
import { IUserSessionRequest } from '../../interfaces/users.interfaces'
import { User } from '../../entities/user.entity'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const createSessionService = async({email, password}: IUserSessionRequest): Promise<string> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            email: email
        }
    })

    if(!user){
        throw new AppError('Invalid email or password', 401)
    }

    const matchPassword = await compare(password, user.password)

    if(!matchPassword){
        throw new AppError('Invalid email or password', 401)
    }

    const token = jwt.sign(
        {
            isAdm: user.isAdm
        },
        process.env.SECRET_KEY as string,
        {
            subject: user.id,
            expiresIn: '2h'
        }
    )

    return token

}

export default createSessionService