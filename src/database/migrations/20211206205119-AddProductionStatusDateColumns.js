'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('production_status', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('production_status', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('production_status', 'createdAt')
    await queryInterface.removeColumn('production_status', 'updatedAt')
  }
};
