// declaração de função

function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao("param");


// expressão de função

const soma = function(primeiroNumero, segundoNumero) {return primeiroNumero + segundoNumero}

console.log(soma(1,1));


// diferença principal: HOISTING

console.log(apresentar());

function apresentar() {
    return "Olá!"
}

console.log(soma(1,1));
const soma = function(primeiroNumero, segundoNumero) {return primeiroNumero + segundoNumero}