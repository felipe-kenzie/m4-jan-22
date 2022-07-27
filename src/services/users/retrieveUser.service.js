import users from "../../database"

const retrieveUserService = (userId) => {
    const user = users.find(user => user.id === userId)
    return user
}

export default retrieveUserService