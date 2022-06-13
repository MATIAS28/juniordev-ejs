//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();
require('./database');

//Cargar archivos de Rutas
var article_routes = require('./routes/articles');


// Serve only the static files form the dist directory
app.use('/views', express.static('views'));
app.use(express.static(__dirname + '/views'));
app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//Rutas
app.use('/', article_routes);


// Start the app by listening on the default Heroku port
var port = process.env.PORT || 9000;
app.listen(port, (start) => {
    console.log("Listen in the port"+" "+port);
});

//exportar
module.exports = app;
