const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = [1, 10, 2, 20, 3, 30, 4, 40];
const items = ['maçã', 'banana', 'maçã', 'laranja', 'maçã'];
// Verificar se um número existe nela de forma quase instantânea, sem precisar de um segundo loop.
function encontraComuns(array1, array2){
    const numbersArray2 = new Set(array2);
    const comuns = [];

    for(const number of array1){
        if(numbersArray2.has(number)){
            comuns.push(number);
        }
    }
    return comuns
}

console.log(encontraComuns(numbers1, numbers2));

// Exercício 7: Contando a Frequência de Itens
// 🎯 A Tarefa: Escreva uma função contaFrequencia que recebe um array (pode ter números ou strings) e retorna um objeto onde cada chave é um item do array e seu valor é o número de vezes que o item apareceu.
// Exemplo de entrada: ['maçã', 'banana', 'maçã', 'laranja', 'maçã']
// Saída esperada (retorno da função): { maçã: 3, banana: 1, laranja: 1 }
function contaFrequencia(array){
    let newArray = array.map(items => {
        let cont = 0
        for(let i = 0; i < items.length; i++){
            for(let j = 0; j < items.length; j++){
                if(items[i] == items[j]){
                    cont++;
                }
            }
        }
        return cont;
    })
    return newArray
}

console.log(contaFrequencia(items));