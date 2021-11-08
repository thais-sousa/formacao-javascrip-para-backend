//DESAFIO: Acessar um objeto com informações de um cliente e exibir essas informações no console

const cliente = {
    nome: "Thais",
    idade: 27,
    cpf: "53226896530",
    email: "sousatcm@gmail.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos!`)

console.log(cliente.cpf.substring(0,3))