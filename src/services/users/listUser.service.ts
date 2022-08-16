import users from '../../database'
import { IUserResponse } from '../../interfaces/users.interfaces'

const listUserService = (): IUserResponse[] => {
    return users
}

export default listUserService