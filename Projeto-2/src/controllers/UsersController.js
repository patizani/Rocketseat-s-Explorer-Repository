//Arquivo que tem o controller que vai executar a requisição. O controller devolve para a rota que devolve para o server.
const AppError = require('../utils/AppError')

class UsersController {
/*
Criada uma class para que contenha várias funções.  
Camada que vai executar o que o usuário executou.
  index - GET para listar vários registros;
  show - GET para exibir um registro específico;
  create - POST para criar um registro;
  update - PUT para atualizar um registro;
  delete - DELETE para remover um registro.
*/

  create(request, response) {
    const {name, email, password} = request.body;

    if(!name) {
      throw new AppError("Nome é obrigatório!");
    }

    response.status(201).json({name, email, password}); 
  }
}

module.exports = UsersController;