//DESAFIO - Puxando relatório - Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco

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

let relatorio = "";

for (let info in cliente)
{
    if(typeof cliente[info] === "object" || typeof cliente [info] === "function")
    {
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
    
}

console.log(relatorio)