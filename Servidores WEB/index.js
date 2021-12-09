const http = require('http')

const server = http.createServer((request, response) => {
    let now = new Date ();
    response.end(`La hora es ${now.getHours()}`)
});

const connect = server.listen(3000, () => {
    let port = connect.address().port;
    console.log(`Escuchando por puerto ${port}`);
})