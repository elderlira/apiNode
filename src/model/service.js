import mongoose from "mongoose";
import { Schema } from "mongoose";

const serviceSchemas = new Schema({
    id: { type: String },
    userId: { type: mongoose.Types.ObjectId, ref: 'users' },
    droneMark: { type: String },
    droneModel: { type: String },
    droneSerial: { type: String },
    controllerRadio: { type: String },
    controllerRadioSerial: { type: String },
    battery: { type: String },
    batterySerial: { type: String },
    acessory: { type: String },
    droneStatus: { type: String },
    batteryStatus: { type: String },
    radioStatus: { type: String },
    imagemStatus: { type: String },
    gimbalStatus: { type: String },
    motoresStatus: { type: String },
    initialAnalyze: { type: String }
    // dataRemocao, dataAtualizacao, dataCriacao
    //idUserRemoca, idUserAtualicacao, idUserCriacao
})

const Services = mongoose.model('services', serviceSchemas)

export default Services