import { Router } from 'express'
import { createPlaylistsController, listPlaylistsController } from '../controllers/playlists.controllers'
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'

const playlistsRoutes = Router()

playlistsRoutes.post('', ensureAuthMiddleware, createPlaylistsController)
playlistsRoutes.get('', listPlaylistsController)

export default playlistsRoutes