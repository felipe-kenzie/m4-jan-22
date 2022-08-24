import { Router } from 'express'
import { createPlaylistSongsController, listPlaylistSongsController } from '../controllers/playlistSongs.controllers'
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'

const playlistSongsRoutes = Router()

playlistSongsRoutes.post('', ensureAuthMiddleware, createPlaylistSongsController)
playlistSongsRoutes.get('/playlist/:id', ensureAuthMiddleware, listPlaylistSongsController)

export default playlistSongsRoutes