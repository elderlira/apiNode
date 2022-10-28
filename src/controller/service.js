import Services from '../model/service.js'

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

    async create(req, res) {
        try {
            await Services.create(req.body)
            res.status(201).json({message: 'Equipamento a ser analisado registrado com sucesso'})
        } catch (err) {
            res.status(400).json({message: 'Erro ao registrar o serviço. Favor contact o administrador'})
        }
    }
}