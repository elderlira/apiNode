import express from 'express'
import userRouter from './router/user.route.js'
import serviceRouter from './router/service.route.js'
import budget from './router/budget.route.js'
import cors from 'cors'
import db from './config/dbConnect.js'

db.on("error", console.log.bind(console, "Erro na conexao com o banco de dados"))
db.once("open", ()=> {
    console.log('Conectado com o banco de dados com sucesso!')
})


const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    app.use(cors())
    app.use('/users', userRouter)
    app.use('/service', serviceRouter)
    app.use('/budget', budget)
    next();
})

export default app
