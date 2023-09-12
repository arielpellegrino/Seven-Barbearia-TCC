const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoColaborador = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: [true, 'Salao é Obrigatório']        
    },     
    colaboradorId:
    {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: [true, 'Especialidade é Obrigatório']               
    },     
    status: {
        type: String,
        enum:['A', 'I'],        
        default: 'A'
    },   
    dataCadastro:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('SalaoColaborador', salaoColaborador);