const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é Obrigatório']        
    },
    telefone: String,
    email: {
        type: String,
        required: [true, 'E-mail é Obrigatório']        
    },
    foto: String,  
    dataNascimento: {
        type: String,
        required: true,
    },
    sexo: {
        type: String,
        enum:['M','F'],
        required: true,
    },
    status: {
        type: String,
        enum:['A', 'I'],        
        default: 'A'
    },     
    contabancaria: {
        titular: {
            type: String,            
            required: true
        },
        cpfcnpj: {
            type: String,            
            required: true
        },
        banco: {
            type: String,            
            required: true
        },
        tipo: {
            type: String,            
            required: true
        },
        agencia: {
            type: String,            
            required: true
        },
        numero: {
            type: String,            
            required: true
        },
        dv: {
            type: String,            
            required: true
        },
    },   
    recipientId: {
        type: String,            
        required: true
    },
    dataCadastro:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Colaborador', colaborador);