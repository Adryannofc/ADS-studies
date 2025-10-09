// Lista de dados para processar
const listaDeDados = ["maçã", "banana", 123, "laranja", null, "uva"];

// Percorra a lista e realize as tentativas

function verificador(array) {
    let cont = 0
    for (item of array) {
        if (typeof item === 'string') {
            cont++
        }
    }
    return  cont
}

console.log(verificador(listaDeDados));