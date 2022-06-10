var ArticleController = require('../controllers/article');
var express = require('express');
var api = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });


api.get('/article/:id?', ArticleController.getArticle);
api.get('/articles', ArticleController.getArticles);
api.get('/about', ArticleController.aboutPage);
api.get('*', ArticleController.getArticles);
//api.get('/get-image/:image', ArticleController.getImageFile);
module.exports = api;