'use strict'

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const Article = new Schema ({
  name: {
    type: String,
    required: [true, 'Escribe un nombre']
  },

  content: {
    type: String,
    required: [true, 'Escribe el contenido del blog']
  },

  title: {
    type: String,
    required: [true, 'Escribe el titulo']
  },

  resumen: {
    type: String,
    required: [true, 'Escribe el resumen del blog']
  },
  date: {
    type: String,
    default: [true, 'Escribe la fecha']
  }
});


module.exports = mongoose.model('Article', Article);


