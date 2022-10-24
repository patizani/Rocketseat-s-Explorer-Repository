const { hash } = require('bcryptjs');
const AppError = require('../utils/AppError');

class UserCreateService {
  constructor(userRepository){ //é executado no momento que a classe é instanciada. Está no escopo da classe.
    this.userRepository = userRepository; //this significa que é o contexto global da classe. A variável estará disponível para a função.
  }

  async execute({name, email, password}){ //método 

    const checkUseExists = await this.userRepository.findByEmail(email);

    if (checkUseExists) {
      throw new AppError('Este e-mail já está em uso.');
    }

    const hashedPassword = await hash(password, 8); //faz a criptografia da senha. 8 = fator de complexidade

    const userCreated = await this.userRepository.create({name, email, password: hashedPassword});

    return userCreated;

  }
    
}

module.exports = UserCreateService;