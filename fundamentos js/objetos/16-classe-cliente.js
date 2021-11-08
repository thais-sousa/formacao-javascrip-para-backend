class cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome,
        this.email = email, 
        this.cpf = cpf,
        this.saldo = saldo
    } 

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

// CRIANDO UM NOVO CLIENTE

const thais = new cliente("Thais", "thais@email.com", "05462587456", "100");

console.log(thais)