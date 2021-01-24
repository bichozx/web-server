const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'applications-json' });

        let salida = {
            nombre: 'danger',
            edad: 6,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('hola Mundo');
        res.end();


    })
    .listen(7070);