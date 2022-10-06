import express from 'express'

const app = express()

const usuarios = [
    {
        "nome": 'elder',
        "cpf":'000010010101',
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

export default app
