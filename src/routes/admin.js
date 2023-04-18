const express = require('express')
const api = express.Router()

const adminController = require('../controllers/admin')
const auth = require('../middlewares/auth')

api.get('/login', adminController.loginPage)
api.post('/login', adminController.login)
api.get('/create-article', auth.verifyToken, adminController.createArticlePage)
api.post('/create-article', auth.verifyToken, adminController.createArticle)

api.post('/prueba', adminController.prueba)
module.exports = api