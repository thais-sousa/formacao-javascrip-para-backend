// const colecionador = {
//     nome: "João do Gibi",
//     idade: 41,
//     tipoColecao: ["quadrinhos"],
//     contato: "joao@email.com"
// }

// console.log(colecionador.nome)
// console.log(colecionador["nome"])

// adicionarTipo: function(propriedade, tipo){
//     this[propriedade].push(tipo)
// }

// for(i=0; i <4; i++) {
//     colecionador.adicionarTipo("tipoColecao", "HQ" +i)
// }

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }


const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

const guerreiroUm = {fichaGuerreiro, equipoGuerreiro}

console.log(guerreiroUm)

const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro}

console.log(guerreiro)