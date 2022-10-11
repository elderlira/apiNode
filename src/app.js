import express from 'express'
import userRouter from './router/user.route.js'
import cors from 'cors'
import db from './config/dbConnect.js'

db.on("error", console.log.bind(console, "Erro na conexao com o banco de dados"))
db.once("open", ()=> {
    console.log('Conectado com o banco de dados com sucesso!')
})


const app = express()

app.use(express.json())
app.use('/users', userRouter)
app.use((req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    resp.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
})

export default app
