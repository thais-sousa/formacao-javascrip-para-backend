//DESAFIO - LISTA DE DEPENDENTES - Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco

const clientes = [
    {
        nome: "Thais",
        idade: 27,
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
            }],
    },

    {
        nome: "Maria",
        cpf:"05423615240",
        dependentes: [
            {
                nome: "Vitória",
                parentesco: "Filha",
                dataNasc: "21/10/2007"
            },
            {
                nome: "Thiago",
                parentesco: "Filho",
                dataNasc: "11/06/1999"
            }],
    },
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes)
console.table(listaDependentes)