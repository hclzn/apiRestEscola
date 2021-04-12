// import Aluno from '../models/Aluno';

class HomeController {
  index(req, res) {
  // async index(req, res) {
  //   const novoAluno = await Aluno.create({
  //     nome: 'Ana',
  //     sobrenome: 'Maria',
  //     email: 'ana@gmail.com',
  //     idade: 17,
  //     peso: 57,
  //     altura: 1.7,
  //   });
    // res.json(novoAluno);
    res.send('Olá! Você está na home :)');
  }
}

export default new HomeController();
