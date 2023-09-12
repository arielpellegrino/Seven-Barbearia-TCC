const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é Obrigatório']        
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        required: [true, 'E-mail é Obrigatório']        
    },
    senha: {
        type: String,
        default: null
    },
    telefone: String,
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    geo: {
        tipo: String,
        coordinates: Array,        
    },
    dataCadastro:{
        type: Date,
        default: Date.now,
    },
});

salao.index({ geo: '2dsphere' });

const Salao = mongoose.model('Salao', salao);

module.exports = Salao;