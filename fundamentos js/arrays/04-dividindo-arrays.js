const nomes = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "André", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinícius", "Renan", "Renata", "Daisy", "Camilo"];

const primeiraSala = nomes.slice(0, nomes.length/2);
const segundaSala = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${primeiraSala}`);
console.log(`Alunos da sala 2: ${segundaSala}`);