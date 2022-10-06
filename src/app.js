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

app.get('/usuario/:id', (req, resp)=> {
    const index = buscarUsuario(req.params.id)
    resp.json(usuarios[index])
})

app.post('/usuario', (req, resp)=> {
    usuarios.push(req.body)
    const {nome} = req.body
    resp.status(201).send(`${nome} foi cadastrado com sucesso`)
})

app.put('/usuario/:id', (req, resp) => {
    let index = buscarUsuario(req.params.id)
    const {id, nome, cpf, email, telefone, logradouro, complemento, bairro, uf} = req.body

    usuarios[index] = {
        id,
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

app.delete('/usuario/:id', (req, resp)=> {
    const index = buscarUsuario(req.params.id)
    if (index === 1) {
        var { nome } = usuarios[index-1]

    } else {
        var { nome } = usuarios[index]

    }
    usuarios.splice(index, 1)
    resp.send(`${nome} foi removido com sucesso`)
})

function buscarUsuario(id) {
return usuarios.findIndex((usuario)=> usuario.id == id)
}

export default app
