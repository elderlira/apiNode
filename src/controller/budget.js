import Service from '../model/service.js'
import Budget from '../model/budget.js'
// import sendEmail from '../Email/sendEmail'

export default ({

    create(req, res) {
        try {
            const { idService } = req.body
            console.log(idService)
            Service.findById(idService, (err)=> {
                if(err) {
                    throw new Error(err)
                }
                req.body?.data.forEach(item => {   
                    Budget.create(item)
                });
            })
        } catch (erro) {
            console.log('erro', erro)
        }
    }
})