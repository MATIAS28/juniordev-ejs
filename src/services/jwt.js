const jwt = require('jsonwebtoken');
const moment = require('moment');
const key = 'hola123';

exports.createToken = (admin) => {
    const payload = {
        sub: admin._id,
        name: admin.name,
        surname: admin.surname,
        email: admin.email,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    }

    return jwt.sign(payload, key);
}