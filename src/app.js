import express from "express"

const app = express()
app.use(express.json())

app.get('/users', (request, response) => {
    return response.json([
        {
            nome: 'FAbio'
        },
        {
            nome: 'Felipe'
        }
    ])
})

app.post('/users', (request, response) => {
    const user = request.body
    console.log(user)
    return res.send()
})

app.listen(3000, () => {
    console.log(`Executando na porta 3000`)
})