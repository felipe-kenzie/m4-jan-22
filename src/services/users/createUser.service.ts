import users from '../../database'
import { v4 as uuidv4 } from 'uuid'
import { IUserRequest, IUserResponse } from '../../interfaces/users.interfaces'

const createUserService = (userData: IUserRequest): IUserResponse => {

    let newUser: IUserResponse = {
        id: uuidv4(),
        ...userData
    }

    users.push(newUser)

    const { password, ...user } = newUser

    return user

}

export default createUserService