import { v4 as uuidv4 } from "uuid"
import users from "../../database"

const createUserService = (userData) => {

    const user = userData

    user.id = uuidv4()
    users.push(user)

    return user
}

export default createUserService