import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import { handleErrorMiddleware } from './middlewares/handleError.middleware'
import userRoutes from './routes/users.routes'
import sessionRoutes from './routes/session.routes'
import paymentInfoRoutes from './routes/paymentInfo.routes'
import playlistsRoutes from './routes/playlists.routes'

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', sessionRoutes)
app.use('/payment_infos', paymentInfoRoutes)
app.use('/playlists', playlistsRoutes)

app.use(handleErrorMiddleware)
app.listen(3000, () => {
    console.log('Server is running!')
})