var ArticleController = require('../controllers/article');
var express = require('express');
var api = express.Router();


api.get('/article/:id?', ArticleController.getArticle);
api.get('/articles', ArticleController.getArticles);
api.get('/about', ArticleController.aboutPage);
api.get('*', ArticleController.getArticles);
module.exports = api;