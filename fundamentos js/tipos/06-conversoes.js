// tipo de dado

// conversão implícita

const numero = 456;
const numeroString = "456";

console.log (numero === numeroString) // compara valor e tipo
console.log (numero == numeroString) // compara apenas o valor


// conversão explícita
// Number()
// String()

console.log (numero + numeroString); // concatena

console.log (numero + Number(numeroString)) // converte a string em number e realiza a soma


var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)