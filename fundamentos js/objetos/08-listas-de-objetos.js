//DESAFIO - Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente

const cliente = {
    nome: "Thais",
    idade: 27,
    cpf: "51248769530",
    email: "sousatcm@gmail.com",
    fones: ["5581958746581", "5519985474521"],
    dependentes: [{
        nome: "Walle",
        parentesco: "Filho",
        dataNasc: "01/10/2012"
    }]
}

cliente.dependentes.push({
    nome: "Logan",
    parentesco: "Filho",
    dataNasc: "19/01/2021"
})

// console.log(cliente)

const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "19/01/2021")

console.log(filhoMaisNovo)
console.log(filhoMaisNovo[0].nome)