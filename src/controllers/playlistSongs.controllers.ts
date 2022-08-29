import { Request, Response } from 'express'
import { IPlaylistSongsRequest } from '../interfaces/playlistSongs.interface'
import createPlaylistSongsService from '../services/playlistSongs/createPlaylistSongs.service'
import listPlaylistSongsService from '../services/playlistSongs/listPlaylistSongs.service'
import listPlaylistSongsSongsService from '../services/playlistSongs/listPlaylistSongsSongs.service'

const createPlaylistSongsController = async(req: Request, res: Response) => {

    const {idPlaylist, idSong}: IPlaylistSongsRequest = req.body
    await createPlaylistSongsService({idPlaylist, idSong})
    return res.status(201).json({
        message: 'Song created with success'
    })

}

const listPlaylistSongsController = async(req: Request, res: Response) => {
    const id = req.params.id
    const playlistSongs = await listPlaylistSongsService(id)
    return res.json(playlistSongs)
}

const listPlaylistSongsSongsController = async(req: Request, res: Response) => {
    const id = req.params.id
    const playlistSongs = await listPlaylistSongsSongsService(id)
    return res.json(playlistSongs)
}

export { createPlaylistSongsController, listPlaylistSongsController, listPlaylistSongsSongsController }