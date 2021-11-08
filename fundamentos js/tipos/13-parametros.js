// parâmetros de função

function soma(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `O meu nome é ${nome} e tenho ${idade} anos`;
}

console.log(nomeIdade("Thais", 27));


function multiplica(primeiroNumero = 1, segundoNumero = 1) {
    return primeiroNumero * segundoNumero;
}

console.log(multiplica(10, 5));
console.log(multiplica(50, 2));
console.log(multiplica(soma(3, 3), soma(4, 5)));
console.log(multiplica(soma(3, 7)));



