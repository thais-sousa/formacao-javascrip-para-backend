//DESAFIO (COMPOR OBJETOS)- Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

const cliente = {
    nome: "Thais",
    idade: 27,
    cpf: "51248769530",
    email: "sousatcm@gmail.com",
    fones: ["5581958746581", "5519985474521"]
}

cliente.dependentes = {
    nome: "Logan",
    parentesco: "Filho",
    dataNascimento: "19/01/2021"
}

console.log(cliente)

cliente.dependentes.nome = "Logan Marques"