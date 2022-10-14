import users from "../model/user.js"

export default { 
    index(req, res) {
        res.status(200).send('Pagina inicial')
    },

    getAll (req, res) {
        users.find((err, users) => {
            if(!err) {
                res.status(200).json(users)
            } else {
                res.status(500).send({message: 'Não foi possível carregar a lista. Contacte o administrador.'})
            }
        })
    },

    getByName(req, res) {
        const nome = req.query.nomeCompleto
        users.find({'nomeCompleto': nome}, (err, user)=> {
         if(!err) {
            res.status(200).send(user)
         } else {
            res.status(500).send({message: 'Usuário não encontrado'})
         }
        })
     },

     getByCpf(req, res) {
        const cpf = req.query.cpf
        users.find({'cpf': cpf}, (err, user)=> {
            if(!err) {
                res.status(200).send(user)
            } else {
                res.status(500).send({message: 'Usuario não encontrado'})
            }
        })
     },

    getById(req, res) {
        const id = req.params.id
        users.findById(id, (err, user)=> {
            if(!err) {
                res.status(200).send(user)
            } else {
                res.status(400).send({message: 'Usuário não localizado ou inexistente'})
            }
        })
    },

    create(req, res) {
        const user = new users(req.body)
        user.save((err)=> {
            if (err) {
                res.status(500).send({message: 'Erro ao cadastrar o usuario. Contacte o administrador.'})
            } else {
                res.status(201).send(`${user.nomeCompleto} foi cadastrado com sucesso`)
            }
        })
    },

    update(req, res) {
        const id = req.params.id
        users.findByIdAndUpdate(id, ({$set: req.body}), (err, user)=> {
            if(!err) {
                res.status(200).send(`Os dados do usuário, ${user.nomeCompleto}, foram atualizados com sucesso`)
            } else {
                res.status(500).send({message: 'Não foi possível atualizar os dados. Contacte o administrador'})
            }
        })
    },

    remove(req, res) {
        const id = req.params.id
        users.findByIdAndDelete(id, (err, user)=> {
            if(!err) {
                res.status(200).send(`${user.nomeCompleto} foi deletado com sucesso`)
            } else {
                res.status(500).send({message: 'Não foi possível deletar o usuario. Contacte o administrador'})
            }
        })
    }
}

