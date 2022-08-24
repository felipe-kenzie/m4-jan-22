import { Router } from 'express'
import { createSongsController, listSongsController } from '../controllers/songs.controllers'
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'

const songsRoutes = Router()

songsRoutes.post('', ensureAuthMiddleware, createSongsController)
songsRoutes.get('', listSongsController)

export default songsRoutes