import AppDataSource from '../../data-source'
import { PlaylistSongs } from '../../entities/playlistSongs.entity'
import { Song } from '../../entities/song.entity'
import { AppError } from '../../errors/AppError'

const listPlaylistSongsSongsService = async(id: string): Promise<PlaylistSongs[]> => {

    const songRepository = AppDataSource.getRepository(Song)

    const findSong = await songRepository.findOneBy({
        id
    })

    if(!findSong){
        throw new AppError('Song not found', 404)
    }

    const playlistSongs = await AppDataSource.getRepository(PlaylistSongs).createQueryBuilder("playlistSongs").
    innerJoinAndSelect("playlistSongs.song", "song").
    innerJoinAndSelect("playlistSongs.playlist", "playlist").
    select(["playlistSongs.createdAt", "playlist.name", "playlist.id"]).
    where("song.id = :id", {id}).
    getMany()
    
    return playlistSongs

}

export default listPlaylistSongsSongsService