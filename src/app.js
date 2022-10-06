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

app.get('/', (req, resp)=> {
    resp.status(200).send('Pagina inicial')
})

app.get('/usuario', (req, resp)=> {
    resp.status(200).json(usuarios)
})

app.post('/usuario', (req, resp)=> {
    usuarios.push(req.body)
    resp.status(201).send('Usuario cadastrado com sucesso')
})

app.put('/usuario/:id', (req, resp) => {
    let index = buscarUsuario(req.params.id)
    const {nome, cpf, email, telefone, logradouro, complemento, bairro, uf} = req.body

    usuarios[index] = {
        nome,
        cpf,
        email,
        telefone,
        logradouro,
        complemento,
        bairro,
        uf
    }
    
    resp.json(usuarios[index])
})

function buscarUsuario(id) {
return usuarios.findIndex((usuario)=> usuario.id == id)
}

export default app
