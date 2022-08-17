import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

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

}

export { User }