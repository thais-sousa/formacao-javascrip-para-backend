//DESAFIO - CLIENTE GENÉRICO - Gerar uma função que permita a criaçã de novos clientes a partir de um modelo 

function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const thais = new Cliente("Thais", "05563516290", "thais@email.com", 500)

console.log(thais)