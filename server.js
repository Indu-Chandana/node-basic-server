const http = require("http") // http coming from node by default

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end('Bye')
})

const port = 4000

server.listen(port, () => {
    console.log('Server is running')
})