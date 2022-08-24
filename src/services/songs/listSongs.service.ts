import AppDataSource from '../../data-source'
import { Song } from '../../entities/song.entity'

const listSongsService = async(): Promise<Song[]> => {

    const songRepository = AppDataSource.getRepository(Song)
    const songs = await songRepository.find()
    return songs

}

export default listSongsService