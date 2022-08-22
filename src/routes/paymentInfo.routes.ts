import { Router } from 'express'
import { createPaymentInfosController } from '../controllers/paymentInfos.controllers'
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'

const paymentInfoRoutes = Router()

paymentInfoRoutes.post('', ensureAuthMiddleware, createPaymentInfosController)

export default paymentInfoRoutes