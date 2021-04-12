module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('alunos',
    [
      {
        nome: 'John',
        sobrenome: 'Silva',
        email: 'john@teste.com',
        idade: 12,
        peso: 45,
        altura: 1.64,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Ana',
        sobrenome: 'Paula',
        email: 'ana@teste.com',
        idade: 14,
        peso: 54,
        altura: 1.60,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Joao',
        sobrenome: 'Miguel',
        email: 'jm@teste.com',
        idade: 12,
        peso: 45,
        altura: 1.64,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Johnny',
        sobrenome: 'Bravo',
        email: 'jb@teste.com',
        idade: 13,
        peso: 50,
        altura: 1.80,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Diogo',
        sobrenome: 'Silva',
        email: 'ds@teste.com',
        idade: 18,
        peso: 80,
        altura: 1.80,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: () => {},
};
