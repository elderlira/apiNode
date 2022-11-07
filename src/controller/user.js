import Users from "../model/User.js"
import Service from '../model/service.js'

export default { 
    index(req, res) {
        res.status(200).send('Pagina inicial')
    },

    getAll (req, res) {
        Users.find((err, Users) => {
            if(!err) {
                res.status(200).json(Users)
            } else {
                res.status(500).send({message: 'Não foi possível carregar a lista. Contacte o administrador.'})
            }
        })
    },

    getByName(req, res) {
        const nome = req.query.nomeCompleto
        Users.find({'nomeCompleto': nome}, (err, user)=> {
         if(!err) {
            res.status(200).send(user)
         } else {
            res.status(500).send({message: 'Usuário não encontrado'})
         }
        })
     },

     getByCpf(req, res) {
        const cpf = req.query.cpf
        Users.find({'cpf': cpf}, (err, user)=> {
            if(!err) {
               Service.find({'userId': user[0]._id}, (err, servico)=> {
                if(!err) {
                    var dados = {}
                    dados.user = user[0]
                    dados.service = servico
                    res.status(200).send(dados)
                }
               })
            } else {
                res.status(500).send({message: 'Usuario não encontrado'})
            }
        })
     },

    getById(req, res) {
        const id = req.params.id
        Users.findById(id, (err, user)=> {
            if(!err) {
                Service.find({'userId': user._id}, (err, servico)=> {
                    if(!err) {
                        var dados = {}
                        dados.user = user
                        dados.service = servico
                        res.status(200).send(dados)
                    }
                })
            } else {
                res.status(400).send({message: 'Usuário não localizado ou inexistente'})
            }
        })
    },

    async create(req, res) {
        try {
            const user = await Users.create(req.body)
            return res.status(201).json({message: ` ${user.nomeCompleto} cadastrado com sucesso`})
        } catch (erro) {
            return res.status(400).json({message: `${req.body.cpf} já possui cadastro` })
        }
    },

    update(req, res) {
        const id = req.params.id
        Users.findByIdAndUpdate(id, ({$set: req.body}), (err)=> {
            if(!err) {
                res.status(200).send({message: 'Os dados do usuário foram atualizados com sucesso'})
            } else {
                res.status(500).send({message: 'Não foi possível atualizar os dados. Contacte o administrador'})
            }
        })
    },

    remove(req, res) {
        const id = req.params.id
        Users.findByIdAndDelete(id, (err, user)=> {
            if(!err) {
                res.status(200).send(`${user.nomeCompleto} foi deletado com sucesso`)
            } else {
                res.status(500).send({message: 'Não foi possível deletar o usuario. Contacte o administrador'})
            }
        })
    }
}

