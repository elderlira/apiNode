import mongoose from "mongoose";

const userSchemas = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    cpf: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    cep: {type: String, required: true},
    logradouro: {type: String, required: true},
    complemento: {type: String},
    bairro: {type: String, required: true},
    uf: {type: String, required: true}
})

const users = mongoose.model('users', userSchemas)

export default users