class Cliente {
     constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
     }

depositar(valor) {
    this.saldo += valor
}

exibirSaldo() {
    console.log(this.saldo)
}

}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}

const thais = new ClientePoupanca("Thais", "thais@email.com", 
'05426895124', 100, 200)

console.log(thais)

thais.depositar(50)
thais.depositarPoupanca(50)

console.log(thais)