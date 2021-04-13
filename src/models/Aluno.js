import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres,',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres,',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
        unique: {
          msg: 'E-mail já cadastrado.',
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          max: {
            args: 99,
            msg: 'Idade inválida.',
          },
          min: {
            args: 1,
            msg: 'Idade inválida.',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          max: {
            args: 200,
            msg: 'Peso inválido.',
          },
          min: {
            args: 1,
            msg: 'Peso inválido.',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          max: {
            args: 2.5,
            msg: 'Altura inválida. Indique a altura em metros.',
          },
          min: {
            args: 0.1,
            msg: 'Altura inválida. Indique a altura em metros.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
