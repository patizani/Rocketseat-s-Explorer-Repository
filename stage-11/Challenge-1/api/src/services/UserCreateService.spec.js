// é uma função: 1o. descrição do teste, 2o. função que vai executar de fato o teste.
// it("result of them sum of 2 + 2 must be 4", () => {
//   const a = 2;
//   const b = 2;
//   const result = a + b;
//   expect(result).toEqual(4); //função para informar qual é a expectativa do resultado do teste.
// }); 

const UserCreateService = require('./UserCreateService');
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
const AppError = require('../utils/AppError');

describe("UserCreateService", () => { //criar grupo de teste por assunto
  let userRepositoryInMemory = null;
  let userCreateService = null;

  beforeEach(() => {//será executada para cada teste.
    userRepositoryInMemory = new UserRepositoryInMemory();
    userCreateService = new UserCreateService(userRepositoryInMemory);
  }) 


  it("user should be create", async () => {
    const user = {
      name: "User Test",
      email: "user@test.com",
      password: "123"
    };
  
    const userCreated = await userCreateService.execute(user);
    expect(userCreated).toHaveProperty("id");
  });

  it("user not should be create with exists email", async () => {
    const user1 ={
      name: "User Test 1",
      email: "user@test.com", 
      password: "123"
    };

    const user2 ={
      name: "User Test 2",
      email: "user@test.com", 
      password: "456"
    };

    await userCreateService.execute(user1);
    await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso."));
  });
}) 


// describe("NotesCreateService", () => {
//   it("create notes", async () => {
//     expect(1).toBe(1);
//   })
// })
