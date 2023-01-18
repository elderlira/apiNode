import Services from '../model/service.js'
import Users from "../model/User.js"
import sendEmail from '../Email/sendEmail.js'
import { json } from 'express'

export default {

    getAll(req, res) {
        Services.find((err, Serv)=> {
            if(!err) {
                // console.log(Serv)
                res.status(200).json(Serv)
            } else {
                // console.log(err)
                res.status(400).json({message: 'Não foi possível obter a lista de serviço ou não existe'})
            }
        })
    },

    getById(req, res) {
        const id = req.params.id
        try {
            Services.find({'_id': id}, (err, Serv) => {
                if(!err) {
                    res.status(200).json(Serv)
                }
            })
        } catch (erro) {
            throw new Error(erro)
        }
    },

    create(req, res) {
        try {
            const {email, userId} = req.body
            Users.findById(userId, (err, user)=> {
                if(!err) {
                    Services.create(req.body)
                    const message = 'seu equipamento a ser analisado foi registrado com sucesso'
                    sendEmail(email, user.nomeCompleto, message)
                    res.status(201).json({
                        message,
                        userData: user.nomeCompleto
                    })
                }
            })
        } catch (err) {
            res.status(400).json({message: 'Erro ao registrar o serviço. Favor contact o administrador'})
        }
    }
}
