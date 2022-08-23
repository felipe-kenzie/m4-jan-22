import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { PaymentInfo } from './paymentInfo.entity'
import { Playlist } from './playlist.entity'
import { Exclude } from 'class-transformer'

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60 })
    name: string

    @Column({ unique: true, length: 60 })
    email: string

    @Column({ length: 120 })
    @Exclude()
    password: string

    @Column()
    isAdm: boolean

    @Column({ default: true })
    isActive: boolean

    @OneToOne(() => PaymentInfo, {eager: true}) @JoinColumn()
    paymentInfo: PaymentInfo

    @OneToMany(() => Playlist, playlist => playlist.user)
    playlist: Playlist[]

}

export { User }