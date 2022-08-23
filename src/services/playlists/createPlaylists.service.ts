import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { Playlist } from '../../entities/playlist.entity'

const createPlaylistsService = async(name: string, userId: string): Promise<Playlist> => {

    const userRepository = AppDataSource.getRepository(User)
    const playlistRepository = AppDataSource.getRepository(Playlist)

    const user = await userRepository.findOneBy({
        id: userId
    })

    const playlist = playlistRepository.create({
        name,
        user: user!
    })

    await playlistRepository.save(playlist)

    return playlist

}

export default createPlaylistsService