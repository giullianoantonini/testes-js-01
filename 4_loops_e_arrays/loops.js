/*
    Cola:
    Lembrem-se da condição de parada do loop.
    Dentro do loop, pode haver qualquer bloco de código que se repetirá
    Loops: for, while e do while
*/

function listaImpares(limite) {
    // Retorna um array contendo todos os números ímpares até 'limite'
    const impares = [];
    for (let i = 0; i <= limite; i++) {
        if (i % 2 == 1) {
            impares.push(i);
        }
    }
    return impares
}
/*
    Cola: Texto é um array de caracteres,
    então você pode acessar cada caractere individualmente com texto[i]
*/
function contaCaracteres(texto, caracter) {
    // Retorna a quantidade de vezes que 'caracter' aparece em 'texto'
    let contador = 0
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++
        }
    }
    return contador
}

module.exports = {
    listaImpares,
    contaCaracteres,
};
