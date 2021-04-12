"use strict";// Para criar esse arquivo, no terminal: npx sequelize seed:generate --name -criar-usuarios
// Para mandar escrever na base: npx sequelize db:seed:all

const bcryptjs = require('bcryptjs');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        nome: 'Luiz',
        email: 'luiz1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz2',
        email: 'luiz2@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz3',
        email: 'luiz3@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: async () => {
  },
};
