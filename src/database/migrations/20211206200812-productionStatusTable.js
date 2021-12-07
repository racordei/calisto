'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('production_status', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customername: {
        allowNull: false,
        type: Sequelize.STRING
      },
      inputfilename: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hexid: {
        allowNull: false,
        type: Sequelize.STRING
      },
      productname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('production_status')
  }
};
