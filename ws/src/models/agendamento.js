const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Agendamento = sequelize.define('Agendamento', {
    servicoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Servicos', // Substitua 'Servico' pelo nome correto da tabela de serviços
            key: 'id',
        },
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    valor: {
        type: DataTypes.FLOAT, // Use FLOAT para números decimais
        allowNull: false,
    },
});

(async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Tabela Agendamento sincronizada com o banco de dados.');
    } catch (error) {
        console.error('Erro ao sincronizar tabela com o banco de dados:', error);
    }
})();

module.exports = Agendamento;