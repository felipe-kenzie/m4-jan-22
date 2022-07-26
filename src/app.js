import express from "express"
import { v4 as uuidv4 } from "uuid"

const app = express()
app.use(express.json())

const users = []

const userExists = (request, response, next) => {
    const { id } = request.params
    const user = users.find(user => user.id === id)

    if(user){
        request.user = user
        next()
    }

    return response.status(404).json({
        message: 'User not found'
    })
}

app.post('/users', (request, response) => {
    const user = request.body
    user.id = uuidv4()
    users.push(user)
    return response.status(201).json(user)
})

app.get('/users', (request, response) => {
    return response.json(users)
})

app.get('/users/:id', userExists, (request, response) => {
    return response.json(request.user)
})

app.listen(3000, () => {
    console.log(`Executando na porta 3000`)
})