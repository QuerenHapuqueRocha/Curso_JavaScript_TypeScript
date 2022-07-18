/*Luiz Otavio Miranda tem 30 anos, peso 84kg.
tem 1.8 de altura e seu IMC é de 25.925925925925924 
Luiz Otavio nasceu em 1980*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

let imc = peso / (alturaEmM * alturaEmM) ; // (peso / altura * altura)

let anoNascimento = 2022 - 30;

console.log(nome, sobrenome, 'tem', idade, 'anos', peso, 'kg.');

console.log(`Tem, ${alturaEmM} de altura e seu imc é de ${imc}`);

console.log(nome, 'nasceu em', anoNascimento);