import Services from '../model/service.js'
import Users from "../model/User.js"
import sendEmail from '../Email/sendEmail.js'

export default {

    getAll(req, res) {
        Services.find((err, Serv)=> {
            if(!err) {
                console.log(Serv)
                res.status(200).json(Serv)
            } else {
                console.log(err)
                res.status(400).json({message: 'Não foi possível obter a lista de serviço ou não existe'})
            }
        })
    },

    create(req, res) {
        try {
            const {email, userId} = req.body
            Users.findById(userId, (err, user)=> {
                if(!err) {
                    Services.create(req.body)
                    const message = 'seu serviço foi cadastrado com sucesso'
                    sendEmail(email, user.nomeCompleto, message)
                    res.status(201).json({
                        message: 'seu equipamento a ser analisado foi registrado com sucesso',
                        userData: user.nomeCompleto
                    })
                }
            })
        } catch (err) {
            res.status(400).json({message: 'Erro ao registrar o serviço. Favor contact o administrador'})
        }
    }
}
