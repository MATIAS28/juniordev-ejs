'use strict'

const ejs = require('ejs');
var Article = require('../models/article');

function getArticles(req, res){

    Article.find({}).sort('-year').exec((err, articles) => {
        if(err) return res.status(500).send({message: 'error al cargar articulos'});
        if (!articles) return res.status(404).send({message: 'No hay articulos para mostrar'});

        res.render('articles', {articles});            
    });
} 

function getArticle(req,res){
    var articleId = req.params.id;

    if (articleId == null) return res.status(404).send({message: 'El artículo no existe'});
    

    Article.findById(articleId, (err, article) => {
        
        if(err) return res.status(500).send({message:'articulo no encontrado'});

        if(!article) return res.status(404).send({message:'Error en el servidor'});

        return res.render('article', {article});

    });

}

 function aboutPage(req, res){

   return res.render('about');

}


module.exports = {
    getArticles,
    getArticle,
    aboutPage
};

