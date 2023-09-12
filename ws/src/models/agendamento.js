const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema({     
    salaoId:
    {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: [true, 'Salão é Obrigatório']               
    },     
    clienteId: {
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: [true, 'Cliente é Obrigatório']        
    }, 
    servicoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        required: [true, 'Servico é Obrigatório']        
    }, 
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: [true, 'Colaborador é Obrigatório']        
    },   
    data:{
        type: Date,
        rquired: true
    },
    comissao:{
        type: Number,
        rquired: true
    },
    valor:{
        type: Number,
        rquired: true
    },
    transactionId:{
        type: String,
        rquired: true
    },
    dataCadastro:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('SalaoCliente', salaoCliente);