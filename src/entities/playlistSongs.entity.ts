import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { Playlist } from './playlist.entity'
import { Song } from './song.entity'

@Entity('playlist_songs')
class PlaylistSongs {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Playlist)
    playlist: Playlist

    @ManyToOne(() => Song, {eager: true})
    song: Song

}

export { PlaylistSongs }