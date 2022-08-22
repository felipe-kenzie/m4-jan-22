import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { PaymentInfo } from './paymentInfo.entity'

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60 })
    name: string

    @Column({ unique: true, length: 60 })
    email: string

    @Column({ length: 120 })
    password: string

    @Column()
    isAdm: boolean

    @Column({ default: true })
    isActive: boolean

    @OneToOne(() => PaymentInfo, {eager: true}) @JoinColumn()
    paymentInfo: PaymentInfo

}

export { User }