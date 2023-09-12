const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
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
    dataCadastro:{
        type: Date,
        default: Date.now,
    },
    documento: {   
        tipo:{
            type: String,
            enum: ['cpf', 'cnpj'],
            required: true
        }, 
        numero:{
            type: String,
            required: true
        },         
    },
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
});

module.exports = mongoose.model('Cliente', cliente);