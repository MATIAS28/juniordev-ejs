const jwt = require('jsonwebtoken')
const moment = require('moment');
const key = 'hola123'

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const expToken = jwt.decode(token, key)
        const verified = jwt.verify(token, key)

        if (expToken.exp <= moment().unix()) {
            return res.status(401).send({message: 'El token ha expirado, vuelve a iniciar session'})
        }else{
            req.admin = verified
            next()
        }
    } catch (error) {
        res.redirect('/login');
    }
}

module.exports = {verifyToken};