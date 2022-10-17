import mongoose from "mongoose";

const userSchemas = new mongoose.Schema({
    id: {type: String},
    nomeCompleto: {type: String, required: true},
    cpf: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    cep: {type: String, required: true},
    logradouro: {type: String, required: true},
    complemento: {type: String},
    bairro: {type: String, required: true},
    uf: {type: String, required: true},
    nivel: {type: String, default: 0},
    servicos: {type: String} //later replace by-> mongose.Schema.Types.ObjectId, ref: 'service' 
})

const Users = mongoose.model('users', userSchemas)

export default Users