const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: [true, 'Salao é Obrigatório']        
    }, 
    especialidades: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Servico',
            required: [true, 'Especialidade é Obrigatório']               
        }
    ], 
    colaboradores: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Colaborador',
            required: [true, 'Especialidade é Obrigatório']               
        }
    ], 
    dias:{
        type: [Number],
        required: true
    },
    inicio:{
        type: Date,
        required: true
    },
    fim:{
        type: Date,
        required: true
    },
    dataCadastro:{
        type: Date,
        default: Date.now,
    },
});

salao.index({ geo: '2dsphere' });

module.exports = mongoose.model('Salao', salao);