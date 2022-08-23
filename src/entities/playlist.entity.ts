import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { User } from './user.entity'

@Entity('playlists')
class Playlist {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 45 })
    name: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User, {eager: true})
    user: User

}

export { Playlist }