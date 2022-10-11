import mongoose from "mongoose";
// import dbCredentials from "./dbCredentials.js"

const enviromentConnect = "mongodb+srv://doctorFenix:doctorFenixEBR@cluster0.qtlsnmj.mongodb.net/doctorFenix-node"

// const localConnect = 'mongodb://localhost:27017/user'

mongoose.connect(enviromentConnect)

let db = mongoose.connection

export default db