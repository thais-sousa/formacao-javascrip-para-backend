//DESAFIO: Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimí-la, verificando se há mais de um número em algum cadastro.

const cliente = {
    nome: "Thais",
    idade: 36,
    cpf: "25425639871",
    email: "sousatcm@gmail.com",
    fones: ["5581985623574", "5519987421564"]
}

cliente.fones.forEach(fone => console.log(fone));
