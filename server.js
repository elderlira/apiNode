//criando um servidor local

const http = require('http')
const port = '3000'

const server = http.createServer((request, response)=> {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    })
    response.end('Iniciando a construcao da API local')
})

server.listen(port, ()=> {
    console.log(`Servidor inicializado em http://localhost:${port}`)
})