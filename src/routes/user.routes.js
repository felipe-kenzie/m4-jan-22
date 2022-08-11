import { Router } from "express";
import { createUserController, listUserController, retrieveUserController } from "../controllers/user.controllers";
import userSchema from "../database/schemas/user.schema"
import schemaValidation from "../middlewares/schemaValidation.middleware";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import isAdmOrOwnerMiddleware from "../middlewares/isAdmOrOwner.middleware";

const userRoutes = Router()

userRoutes.post('', schemaValidation(userSchema), createUserController)
userRoutes.get('', authenticationMiddleware, listUserController)
userRoutes.get('/:id', authenticationMiddleware, isAdmOrOwnerMiddleware, retrieveUserController)

export default userRoutes