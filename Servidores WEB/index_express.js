const express = require('express');

const app = express()
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.on("error", (error) => {
    //tipo de error 500
    console.log("Hubo un error en el servidor");
})

app.get('/', (request, response) => {
    response.send("Hola charolas")
})

app.get('/productos', (request, response) => {
    response.send("Esta es la lista de productos")
})