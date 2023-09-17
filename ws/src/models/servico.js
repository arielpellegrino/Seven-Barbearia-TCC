const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../database');

const Servico = sequelize.define('Servico', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT, 
      allowNull: false,
    },  
    duracao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('A', 'I', 'E'),
      defaultValue: 'A',
    }
  });
  
// Sincronize o modelo com o banco de dados
(async () => {
try {
    await sequelize.sync({ force: false });
    console.log('Tabela Servico sincronizada com o banco de dados.');
} catch (error) {
    console.error('Erro ao sincronizar tabela com o banco de dados:', error);
}
})();

module.exports = Servico;