import express from "express"
import { startDatabase } from "./database"
import userRoutes from "./routes/user.routes"
import sessionRoutes from "./routes/session.routes"

const app = express()
app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', sessionRoutes)

app.listen(3000, () => {
    console.log(`Executando na porta 3000`)
    startDatabase()
})

export default app