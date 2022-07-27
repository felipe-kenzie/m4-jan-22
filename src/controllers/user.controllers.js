import createUserService from "../services/users/createUser.service"
import listUserService from "../services/users/listUser.service"
import retrieveUserService from "../services/users/retrieveUser.service"

const createUserController = (request, response) => {
    const user = request.body
    const newUser = createUserService(user)
    return response.status(201).json(newUser)
}

const listUserController = (request, response) => {
    const users = listUserService()
    return response.json(users)
}

const retrieveUserController = (request, response) => {
    const { id } = request.params
    const user = retrieveUserService(id)
    return response.json(user)
}

export { createUserController, listUserController, retrieveUserController }