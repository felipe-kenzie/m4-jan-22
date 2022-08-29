import { Router } from 'express'
import { createUserController, listUserController, updateUserController } from '../controllers/users.controllers'
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'
import { validationMiddleware } from '../middlewares/validation.middleware'
import { userSchema } from '../schemas/users.schemas'

const userRoutes = Router()

userRoutes.post('', validationMiddleware(userSchema), createUserController)
userRoutes.get('', ensureAuthMiddleware, listUserController)
userRoutes.patch('/:id', ensureAuthMiddleware, updateUserController)

export default userRoutes