import { v4 as uuidv4 } from "uuid"
import users from "../../database"
import { hash } from "bcrypt"

const createUserService = async (userData) => {

    const user = userData

    const hashedPassword = await hash(userData.password, 10)

    user.password = hashedPassword

    user.id = uuidv4()
    users.push(user)

    return user
}

export default createUserService