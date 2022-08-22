import { Request, Response } from 'express'
import { IPaymentInfosRequest } from '../interfaces/paymentInfos.interfaces'
import createPaymentInfosService from '../services/paymentInfos/createPaymentInfos.service'

const createPaymentInfosController = async (req: Request, res: Response) => {

    const {code, dueDate, name, number}: IPaymentInfosRequest = req.body
    const { id } = req.user

    const paymentInfo = await createPaymentInfosService(id, {code, dueDate, name, number})

    return res.status(201).json(paymentInfo)

}

export { createPaymentInfosController }