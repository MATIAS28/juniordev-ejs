const mongoose = require('mongoose')

const Admin = mongoose.Schema({

    email:{
        type: String,
        required: [true, 'Ingresa tu email']
    },

    password:{
        type: String,
        required: [true, 'Ingresa la contraseña']
    }
})

module.exports = mongoose.model('Admin', Admin)