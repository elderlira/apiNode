import mongoose from "mongoose";
import { Schema } from "mongoose"

const userSchemas = new Schema({
    id: {type: String},
    nomeCompleto: {type: String, required: true, max: 40},
    cpf: {type: String, required: true, unique: true, max: 11},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    whatsapp: {type: String},
    instagram: {type: String},
    cep: {type: String, required: true, max: 7},
    logradouro: {type: String, required: true},
    complemento: {type: String},
    bairro: {type: String, required: true},
    uf: {type: String, required: true, max: 2},
    nivel: {type: String, default: 0, max: 1},
    servicos: {type: String} //later replace by-> Schema.Types.ObjectId, ref: 'service' 
})

const Users = mongoose.model('users', userSchemas)

export default Users