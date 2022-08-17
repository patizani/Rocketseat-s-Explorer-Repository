/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Luiz",
    firstTest: 5.0,
    secondTest:7.0
  },
  {
    name: "Letícia",
    firstTest: 8.0,
    secondTest:6.0
  },
  {
    name: "Diego",
    firstTest: 8.0,
    secondTest:5.0
  },
]

function average(firstTest, secondTest) {
  return (((firstTest + secondTest)/2).toFixed(2))
}

for (let student of students) {
  let message = average(student.firstTest,student.secondTest)
  if (message < 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${message}\nNão foi dessa vez, ${student.name}! Tente novamente!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${message}\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  }
  
}