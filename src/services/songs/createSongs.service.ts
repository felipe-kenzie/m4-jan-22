import AppDataSource from '../../data-source'
import { Song } from '../../entities/song.entity'
import { ISongsRequest } from '../../interfaces/songs.interfaces'

const createSongService = async({artist, duration, name}: ISongsRequest): Promise<Song> => {

    const songRepository = AppDataSource.getRepository(Song)

    const song = await songRepository.save({
        artist,
        name,
        duration
    })

    return song

}

export default createSongService