'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.STRING
      },
      cargo: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      empresa_id: {
        type: Sequelize.STRING
      },
      exercicios_id: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Funcionarios');
  }
};