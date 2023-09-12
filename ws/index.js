const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('./database')

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Variaveis
app.set('port', 8000);

// Rotas
app.use('/salao', require('./src/routes/salao.routes'));

app.listen(app.get('port'), () => {
    console.log(`Ws escutando na Porta ${app.get('port')}`);
});