//criando um servidor local

const http = require('http')
const port = '3000'

const rotas = {
    "/": "pagina inicial",
    "/servico": "pagina de servicos",
    "/usuario": "paginas de cadastro de usuarios"
}

const server = http.createServer((request, response)=> {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    })
    response.end(rotas[request.url])
})

server.listen(port, ()=> {
    console.log(`Servidor inicializado em http://localhost:${port}`)
})