
const mongoose = require('mongoose');
const URI = 'mongodb+srv://adminUser:fTWr3Weqfn8qWPR2@desenvolvimento.01zgxdy.mongodb.net/?retryWrites=true&w=majority';


const env = process.env.NODE_ENV || 'dev';
let options = {};


mongoose
    .connect(URI, options)
    .then(() => console.log('Banco de Dados rodando!'))
    .catch((err) => console.log(err));