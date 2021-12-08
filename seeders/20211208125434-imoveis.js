'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Imovels',
    [
      {
        address: 'Copacabana',
        city: 'Rio de Janeiro',
        rooms: 4,
        garage: 'duas vagas',
        price: 3000,
        type: 'Apartamento',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        address: 'Liberdade',
        city: 'Sao Paulo',
        rooms: 3,
        garage: 'uma vaga',
        price: 2700,
        type: 'Apartamento',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Imovels', null, {}),
};