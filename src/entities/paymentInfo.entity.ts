import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('payment_infos')
class PaymentInfo {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 45 })
    name: string

    @Column({ length: 16 })
    number: string

    @Column({ type: 'date' })
    dueDate: Date

    @Column({ length: 3 })
    code: string

}

export { PaymentInfo }