function apresentacao(nome) {
    return `Meu nome é ${nome}`;
}

console.log(apresentacao("Thais"))


// arrow function

const apresentacaoArrow = nome => `Meu nome é ${nome}`;
const soma = (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero;


// arrow function com mais de 1 linha de instrução

const somaNumerosPequenos = (primeiroNumero, segundoNumero) => {
    if (primeiroNumero || segundoNumero > 10) {
        return "Somente números de 1 a 9";
    } else {
        return primeiroNumero + segundoNumero;
    }
}