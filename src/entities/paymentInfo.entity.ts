import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Exclude } from 'class-transformer'

@Entity('payment_infos')
class PaymentInfo {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 45 })
    name: string

    @Column({ length: 16 })
    @Exclude()
    number: string

    @Column({ type: 'date' })
    @Exclude()
    dueDate: Date

    @Column({ length: 3 })
    @Exclude()
    code: string

}

export { PaymentInfo }