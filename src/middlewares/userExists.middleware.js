import users from "../database"

const userExists = (request, response, next) => {
    const { id } = request.params
    const user = users.find(user => user.id === id)

    if(user){
        request.user = user
        next()
    }

    return response.status(404).json({
        message: 'User not found'
    })
}

export default userExists