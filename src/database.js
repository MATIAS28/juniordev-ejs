'use strict'
//DB conection
var mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://Matmun:Mocorillo123@kobdb-ybabt.mongodb.net/KOBdb?retryWrites=true&w=majority'
console.log(MONGODB_URI)
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, { connectWithNoPrimary: true, useNewUrlParser: true,  useUnifiedTopology: true })
                .then(() => {
                  console.log('Conectado a la base de datos');
                })
                .catch(err => console.log(err));
