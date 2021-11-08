//DESAFIO - Fazendo depósito - Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancárias.

const cliente = {
    nome: "Thais",
    idade: 27,
    cpf: "05463258956",
    email: "sousatcm@gmail.com",
    fones: ["5581995685214", "5581985654123"],
    dependentes: [
        {
            nome: "Walle",
            parentesco: "Filho",
            dataNasc: "01/10/2012"
        },
        {
            nome: "Logan",
            parentesco: "Filho",
            dataNasc: "19/01/2021"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
