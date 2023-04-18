const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI
//DB conection

mongoose.connect(URI, { connectWithNoPrimary: true, useNewUrlParser: true,  useUnifiedTopology: true })
                .then(() => {
                  console.log('Conectado a la base de datos');
                })
                .catch(err => console.log(err));