import mongoose from "mongoose";
import dbCredentials from "./dbCredentials.js"

const enviromentConnect = `mongodb+srv://doctorFenix:${dbCredentials.password}@cluster0.qtlsnmj.mongodb.net/${dbCredentials.db}`

mongoose.connect(enviromentConnect)

let db = mongoose.connection

export default db