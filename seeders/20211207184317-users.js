'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        firstName: 'Armando',
        lastName: 'Guerra',
        email: 'a.guerra58@hotmail.com',
        password: 'SenhaSegura',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Admin',
        lastName: 'ADM',
        email: 'admin@ADM.com',
        password: 'SenhaSegura!!!!',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};