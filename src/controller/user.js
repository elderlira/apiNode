import users from "../model/user.js"

function buscarUsuario(id) {
    return users.findById((usuario)=> usuario.id == id)
    }

export default { 
    index(req, res) {
        res.status(200).send('Pagina inicial')
    },

    getAll (req, res) {
        users.find((err, users) => {
            res.status(200).json(users)
        })
    },

    getById(req, res) {
        users.findById((err, user)=> {
            const index = buscarUsuario(req.params.id)
            res.json(user[index])
        })
    },

    create(req, res) {
        const user = new users(req.body)

        user.save((err)=> {
            if (err) {
                res.status(500).send({message: `${err.message} - Erro ao cadastrar o usuario`})
            } else {
                res.status(201).send(`${user.nome} foi cadastrado com sucesso`)
            }
        })
    },

    update(req, res) {
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
        
        res.json(usuarios[index])
    },

    remove(req, res) {
        const index = buscarUsuario(req.params.id)
        if (index === 1) {
            var { nome } = usuarios[index-1]
    
        } else {
            var { nome } = usuarios[index]
    
        }
        usuarios.splice(index, 1)
        res.send(`${nome} foi removido com sucesso`)
    }
}

