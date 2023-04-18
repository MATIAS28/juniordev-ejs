//Install express server
const express = require('express') 
const path = require('path') 
var bodyParser = require('body-parser') 

const app = express() 
require('./database') 

// Serve only the static files form the dist directory
app.use('/views', express.static('views')) 
app.use(express.static(__dirname + '/views')) 
app.set('views', './views') 
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

//middlewares
app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json()) 

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') 
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method') 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE') 
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE') 
    next() 
}) 



//Rutas
const article_route = require('./routes/articles')
const admin_route = require('./routes/admin')

app.use('/admin', admin_route)
app.use('/', article_route)


//server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('escuchando en el puerto'+' '+port);
});

//exportar
module.exports = app 