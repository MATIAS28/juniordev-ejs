'use strict'

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const Article = new Schema ({
  name: String,
  content: String,
  title: String,
  resumen: String,
  date: String
});


module.exports = mongoose.model('Article', Article);


