// Faz as rotas da API com a entidade Funcionario

const router = require('express-promise-router')();
const funcController = require('../controllers/funcController');

// ==> Definindo as rotas CRUD - Funcionario:

// Rota responsável por CRIAR um novo Funcionario: (POST) localhost:3000/api/funcionarios
router.post('/funcionarios', funcController.createFuncionario);

// ==> Rota responsável por LISTAR todos os Funcionario: (GET) localhost:3000/api/funcionarios
router.get('/funcionarios', funcController.listAllFuncionario);

// ==> Rota responsável por ATUALIZAR um Funcionario pelo seu CPF: (PUT) localhost:3000/api/funcionarios/:cpf
router.put('/funcionarios/:cpf', funcController.updateFuncionarioByCpf);

// ==> Rota responsável por DELETAR um Funcionario pelo seu CPF: (DELETE) localhost:3000/api/funcionarios/:cpf
router.delete('/funcionarios/:cpf', funcController.deleteFuncionarioByCpf);

module.exports = router;

