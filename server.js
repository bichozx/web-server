const express = require('express')
const app = express();
const hbs = require('hbs')


app.use(express.static(__dirname + '/public'))


//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')

const port = process.env.PORT || 6000;

app.set('view engine', 'hbs');
app.get('/', function(req, res) {
    //res.send('Hola Kmilo')

    res.render('home.hbs', {
        nombre: 'kmilo',
        anio: new Date().getFullYear()
    });

})

app.get('/about', function(req, res) {
    //res.send('Hola Kmilo')

    res.render('about', {
        anio: new Date().getFullYear()
    });
})

app.listen(port, () => {

    console.log(`escuchando en el puerto ${port}`);
})