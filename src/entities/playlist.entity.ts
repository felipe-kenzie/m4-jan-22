import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm'
import { PlaylistSongs } from './playlistSongs.entity'
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

    @OneToMany(() => PlaylistSongs, playlistSongs => playlistSongs.playlist)
    playlistSongs: PlaylistSongs[]

}

export { Playlist }