import { Request, Response } from 'express'
import { IUserRequest } from '../interfaces/users.interfaces'
import createUserService from '../services/users/createUser.service'
import listUserService from '../services/users/listUser.service'

const createUserController = (req: Request, res: Response) => {
    try {
        const { email, isAdm, name, password }: IUserRequest = req.body
        const user = createUserService({email, isAdm, name, password})
        return res.status(201).json(user)
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

const listUserController = (req: Request, res: Response) => {
    try {
        const users = listUserService()
        return res.json(users)
    } catch (error) {
        if (error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export { createUserController, listUserController }