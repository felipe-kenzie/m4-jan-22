import { Router } from "express";
import { createUserController, listUserController, retrieveUserController } from "../controllers/user.controllers";
import userExists from "../middlewares/userExists.middleware";
import userSchema from "../database/schemas/user.schema"
import schemaValidation from "../middlewares/schemaValidation.middleware";

const userRoutes = Router()

userRoutes.post('', schemaValidation(userSchema), createUserController)
userRoutes.get('', listUserController)
userRoutes.get('/:id', userExists, retrieveUserController)

export default userRoutes