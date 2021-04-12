"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['nome', 'ASC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['id', 'url', 'filename'],
        },
      });
      return res.json(alunos);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) return res.status(401).json({ errors: ['Aluno id required.'] });
      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['nome', 'ASC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['id', 'url', 'filename'],
        },
      });
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.body) return res.status(401).json({ errors: ['Aluno id required.'] });

      const aluno = await _Aluno2.default.findByPk(req.params.id);
      if (!aluno) return res.status(401).json({ errors: ['Aluno não encontrado.'] });

      const alunoUpdated = await aluno.update(req.body);
      return res.json(alunoUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.body) return res.status(401).json({ errors: ['Aluno id required.'] });

      const aluno = await _Aluno2.default.findByPk(req.params.id);
      if (!aluno) return res.status(401).json({ errors: ['Aluno não encontrado.'] });

      await aluno.destroy();
      return res.json({ success: ['Aluno excluído com sucesso.'] });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();
