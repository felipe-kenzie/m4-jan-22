import AppDataSource from '../../data-source'
import { Playlist } from '../../entities/playlist.entity'
import { PlaylistSongs } from '../../entities/playlistSongs.entity'
import { AppError } from '../../errors/AppError'

const listPlaylistSongsService = async(idPlaylist: string): Promise<Playlist> => {

    const playlistSongsRepository = AppDataSource.getRepository(PlaylistSongs)
    const playlistRepository = AppDataSource.getRepository(Playlist)

    const playlist = await playlistRepository.findOne(
        {
            where: {
                id: idPlaylist
            },
            relations: {
                playlistSongs: true
            }
        },
    )

    if(!playlist){
        throw new AppError('Playlist not found', 404)
    }

    return playlist

}

export default listPlaylistSongsService