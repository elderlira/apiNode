import Service from '../model/service.js'
import Budget from '../model/budget.js'
// import sendEmail from '../Email/sendEmail'

export default ({

    create(req, res) {
        const idService = req.body[0].idService
        try {
            Service.findById(idService, (err)=> {
                if(err) {
                    throw new Error(err)
                }
                req.body.forEach(item => {   
                    Budget.create(item)
                });
                res.status(201).json({ message: 'Orçamento cadastrado com sucesso!'})
            })
        } catch (erro) {
            console.log('erro', erro)
            res.status(400).json({message: erro})
        }
    },

    getById(req, res) {
        const id = req.params.id
  try {
    Budget.find({'idService': id}, (err, budget)=> {
        if(!err) {
            res.status(200).json(budget)
        }
    })
  } catch (erro) {
    throw new Error(erro)
  }
    }
})