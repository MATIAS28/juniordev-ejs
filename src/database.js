'use strict'

var mongoose = require('mongoose');
//DB conection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://Matmun:Mocorillo123@kobdb-ybabt.mongodb.net/KOBdb?retryWrites=true&w=majority", { connectWithNoPrimary: true, useNewUrlParser: true,  useUnifiedTopology: true })
                .then(() => {
                  console.log('Conectado a la base de datos');
                })
                .catch(err => console.log(err));