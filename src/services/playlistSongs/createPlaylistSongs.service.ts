import AppDataSource from '../../data-source'
import { Song } from '../../entities/song.entity'
import { Playlist } from '../../entities/playlist.entity'
import { PlaylistSongs } from '../../entities/playlistSongs.entity'
import { AppError } from '../../errors/AppError'
import { IPlaylistSongsRequest } from '../../interfaces/playlistSongs.interface'

const createPlaylistSongsService = async({idPlaylist, idSong}: IPlaylistSongsRequest): Promise<void> => {

    const songRepository = AppDataSource.getRepository(Song)
    const playlistRepository = AppDataSource.getRepository(Playlist)
    const playlistSongRepository = AppDataSource.getRepository(PlaylistSongs)

    const playlist = await playlistRepository.findOneBy({
        id: idPlaylist
    })

    const song = await songRepository.findOneBy({
        id: idSong
    })

    if(!playlist || !song){
        throw new AppError('Playlist or song not found', 404)
    }

    await playlistSongRepository.save({
        playlist: playlist,
        song: song
    })

}

export default createPlaylistSongsService