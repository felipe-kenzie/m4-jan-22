import { Router } from 'express'
import { createUserController, listUserController } from '../controllers/users.controllers'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUserController)

export default userRoutes