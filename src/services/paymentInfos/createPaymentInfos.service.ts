import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { PaymentInfo } from '../../entities/paymentInfo.entity'
import { IPaymentInfosRequest } from '../../interfaces/paymentInfos.interfaces'

const createPaymentInfosService = async(userId: string, {code, dueDate, name, number}: IPaymentInfosRequest): Promise<PaymentInfo> => {

    const userRepository = AppDataSource.getRepository(User)
    const paymentInfoRepository = AppDataSource.getRepository(PaymentInfo)

    const paymentInfo = paymentInfoRepository.create({
        code,
        dueDate,
        name,
        number
    })

    await paymentInfoRepository.save(paymentInfo)

    await userRepository.update(userId, { paymentInfo: paymentInfo })

    return paymentInfo

}

export default createPaymentInfosService