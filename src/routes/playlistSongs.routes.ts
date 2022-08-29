import { Router } from 'express'
import { createPlaylistSongsController, listPlaylistSongsController, listPlaylistSongsSongsController } from '../controllers/playlistSongs.controllers'
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'

const playlistSongsRoutes = Router()

playlistSongsRoutes.post('', ensureAuthMiddleware, createPlaylistSongsController)
playlistSongsRoutes.get('/playlist/:id', ensureAuthMiddleware, listPlaylistSongsController)
playlistSongsRoutes.get('/songs/:id', ensureAuthMiddleware, listPlaylistSongsSongsController)

export default playlistSongsRoutes