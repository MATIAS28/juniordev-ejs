const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require('../services/jwt')
const salts = 10;

function createArticlePage(req, res){
    return res.render('createArticle')
}

function loginPage(req, res,){
    return res.render('loginPage')
}

function login(req, res){
    const email = req.body.email
    const password = req.body.password
    console.log(email, password)
    try {
        Admin.findOne({email: email}, (e, admin) => {
            if(e) return res.status(500).send({message: 'Error en la peticion'})
            if(!admin) return res.status(404).send({message: 'Usuario no encontrado'})
            
            bcrypt.compare(password, admin.password, (e, result) => {
             if(e) return res.status(500).send({message: 'Error en la peticion'})
             if(result) {
                return res.status(200).send({token: jwt.createToken(admin)})
             }else{
                return res.status(404).send({message: 'El email o contraseña son incorrectas'})
             }
            })

        })

    } catch (e) {
        return res.status(404).send({message: e?.message})
    }
}

function createArticle(req, res){
    const {...blog} = req.body
    const article = new Article(blog)

    article.save((e, articleSaved) => {
        if(e) return res.status(500).send({message: 'Error al guardar el articulo'})
        if(!articleSaved) return res.status(404).send({message: 'No se pudo guardar el articulo'})

        return res.status(201).send({message: 'Articulo guardado con exito'})
    })
}

function prueba(req, res){
    const password = req.body.password
    const admin = new Admin();
    admin.email = req.body.email

    bcrypt.hash(password, salts, (err, hash) => {
            
        if(err) return res.status(500).send({message: 'error al registrar el usuario'})
        admin.password = hash;

        admin.save((err, userSaved) => {
            if(err) return res.status(500).send({message: 'error al registrar el usuario'})

            if(userSaved){
                return res.status(200).send({message: 'Usuario guardado con exito'})
            }
        })

    })
}

module.exports = {
    prueba,
    loginPage,
    login,
    createArticlePage,
    createArticle
}