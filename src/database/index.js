import { Client } from 'pg'
import 'dotenv/config'

const database = new Client(
    process.env.NODE_ENV === 'test' ? 
    {
        user: "fabio",
        password: "1234",
        host: "localhost",
        database: "demo_teste",
        port: 5432
    }
    :
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB,
        port: 5432
    }
)

export const startDatabase = async () => {
    await database.connect()
    console.log("Database connected!")
}

export default database