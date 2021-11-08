//DESAFIO - Acessar chaves - Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela.

const cliente = {
    nome: "Thais",
    idade: 36,
    cpf: "51362878460",
    email: "sousatcm@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])