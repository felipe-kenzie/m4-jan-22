import { Request, Response } from 'express'
import createPlaylistsService from '../services/playlists/createPlaylists.service'
import listPlaylistsService from '../services/playlists/listPlaylists.service'
import { instanceToPlain } from 'class-transformer'

const createPlaylistsController = async(req: Request, res: Response) => {

    const { id } = req.user
    const { name } = req.body
    const playlist = await createPlaylistsService(name, id)
    return res.status(201).json(playlist)

}

const listPlaylistsController = async(req: Request, res: Response) => {

    const playlists = await listPlaylistsService()
    return res.json(instanceToPlain(playlists))

}

export { createPlaylistsController, listPlaylistsController }