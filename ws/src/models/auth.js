const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../database');
const bcrypt = require('bcrypt');

const Auth = sequelize.define('Auth', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING, // Use STRING para campos de texto
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING, // Use STRING para campos de texto
    allowNull: false,
    set(value) {
      // Use bcrypt para criar um hash seguro da senha antes de armazená-la
      const hashedPassword = bcrypt.hashSync(value, 10); // 10 é o número de rounds de hash
      this.setDataValue('senha', hashedPassword);
    },
  },
  status: {
    type: DataTypes.ENUM('A', 'I', 'E'),
    defaultValue: 'A',
  },
});

// Sincronize o modelo com o banco de dados
(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Tabela Autenticacao sincronizada com o banco de dados.');
  } catch (error) {
    console.error('Erro ao sincronizar tabela com o banco de dados:', error);
  }
})();

module.exports = Auth;