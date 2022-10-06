import express from 'express'

const app = express()

app.use(express.json())

const usuarios = [
    {
        "id": 1,
        "nome": "elder",
        "cpf":"000010010101",
        "email": "email@email.com",
        "telefone":"7112345678",
        "logradouro":"endereco",
        "complemento":"",
        "bairro":"olimpo",
        "uf":"ba"
    }
]

app.get('/', (request, response)=> {
    response.status(200).send('Pagina inicial')
})

app.get('/usuario', (request, response)=> {
    response.status(200).json(usuarios)
})

app.post('/usuario', (request, response)=> {
    usuarios.push(request.body)
    response.status(201).send('Usuario cadastrado com sucesso')
})

export default app
