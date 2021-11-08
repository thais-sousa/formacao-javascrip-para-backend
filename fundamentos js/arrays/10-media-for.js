// calcular a média entre as notas usando o for

const notas = [10, 6.5, 8, 7.5]

//lugar para salvar as médias
let somaDasNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length;

console.log(media)