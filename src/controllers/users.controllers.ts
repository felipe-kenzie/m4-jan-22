import { Request, Response } from 'express'
import { IUserRequest, IUserUpdateRequest } from '../interfaces/users.interfaces'
import createUserService from '../services/users/createUser.service'
import listUserService from '../services/users/listUser.service'
import { instanceToPlain } from 'class-transformer'
import updateUserService from '../services/users/updateUser.service'

const createUserController = async (req: Request, res: Response) => {

    const { email, isAdm, name, password }: IUserRequest = req.body
    const user = await createUserService({email, isAdm, name, password})
    return res.status(201).json(instanceToPlain(user))

}

const listUserController = async (req: Request, res: Response) => {

    const users = await listUserService()
    const id = req.user.id
    console.log(id)
    return res.json(instanceToPlain(users))

}

const updateUserController = async(req: Request, res:Response) => {
    const id = req.params.id
    const {email, name, password}: IUserUpdateRequest = req.body
    const updatedUser = await updateUserService(id, {email, name, password})
    return res.json(updatedUser)
}

export { createUserController, listUserController, updateUserController }