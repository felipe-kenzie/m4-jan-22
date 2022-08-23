import AppDataSource from '../../data-source'
import { Playlist } from '../../entities/playlist.entity'

const listPlaylistsService = async(): Promise<Playlist[]> => {

    const playlistsRepository = AppDataSource.getRepository(Playlist)
    const playlists = await playlistsRepository.find()
    return playlists

}

export default listPlaylistsService