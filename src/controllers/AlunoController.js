import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['nome', 'ASC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
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
      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['nome', 'ASC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
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
      const aluno = await Aluno.create(req.body);
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

      const aluno = await Aluno.findByPk(req.params.id);
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

      const aluno = await Aluno.findByPk(req.params.id);
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

export default new AlunoController();
