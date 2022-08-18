import { Router } from 'express'
import { createUserController, listUserController } from '../controllers/users.controllers'
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'
import { validationMiddleware } from '../middlewares/validation.middleware'
import { userSchema } from '../schemas/users.schemas'

const userRoutes = Router()

userRoutes.post('', validationMiddleware(userSchema), createUserController)
userRoutes.get('', ensureAuthMiddleware, listUserController)

export default userRoutes