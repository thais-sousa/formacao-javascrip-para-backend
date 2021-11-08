// DESAFIO - OFERTA DE SEGURO - Percorrer um objeto, verificar se existe a chave "dependentes" e, caso exista, enviar uma mensagem de oferta de seguro.

const cliente = {
    nome: "Thais",
    idade: 36,
    cpf: "05412698546",
    email: "sousatcm@gmai.com",
    fones: ["5581998545624", "5519985263512"],
    dependentes: [
        {
            nome: "Logan",
            parentesco: "Filho",
            dataNasc: "19/01/2021"
        },
        {
            nome: "Walle",
            parentesco: "Filho",
            dataNasc: "01/10/2012"
        }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}

// const propsClientes = Object.keys(cliente);

// console.log(propsClientes)

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.entries(cliente))
console.log(Object.values(cliente))
oferecerSeguro(cliente)