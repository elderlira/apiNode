import Users from "../model/User.js";
import Services from "../model/service.js";
import Budget from "../model/budget.js"
import sendEmail from "../Email/sendEmail.js";

export default {
  async getAll(req, res) {
    try {
      const services = await Services.find().populate('userId')
      res.status(200).json(services)
    } catch(erro) {
      res.status(200).json({message: `${erro}`})
      throw new Error(erro)
    }
  },

  getById(req, res) {
    const id = req.params.id;
    try {
      Services.find({ '_id': id }, (err, Serv) => {
        if (!err) {
          res.status(200).json(Serv);
        }
      });
    } catch (erro) {
      throw new Error(erro);
    }
  },

  create(req, res) {
    try {
      const { email, userId } = req.body;
      Users.findById(userId, (err, user) => {
        if (!err) {
          Services.create(req.body);
          const message =
            "seu equipamento foi registrado com sucesso e passará por analíse dos nossos técnicos e em ate 96h retornaremos com o diagnóstico";
          sendEmail(email, user, message);
          res.status(201).json({
            message,
            userData: user.nomeCompleto,
          });
        }
      });
    } catch (err) {
      res.status(400).json({
        message: "Erro ao registrar o serviço. Favor contact o administrador",
      });
    }
  },
};
