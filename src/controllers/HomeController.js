import Aluno from '../models/Alunos';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Lucas',
      sobrenome: 'Fernandes',
      email: 'teste@teste.com.br',
      idade: 26,
      peso: 118,
      altura: 1.73,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
