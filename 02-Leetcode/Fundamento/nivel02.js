const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = [1, 10, 2, 20, 3, 3, 4, 4,];
const items = ['maçã', 'banana', 'maçã', 'laranja', 'maçã', 'laranja'];
// Verificar se um número existe nela de forma quase instantânea, sem precisar de um segundo loop.
function encontraComuns(array1, array2) {
    const numbersArray2 = new Set(array2);
    const comuns = new Set;

    for (const number of array1) {
        if (numbersArray2.has(number)) {
            comuns.add(number);
        }
    }
    return comuns
}

console.log(encontraComuns(numbers1, numbers2));

// Exercício 7: Contando a Frequência de Itens
// 🎯 A Tarefa: Escreva uma função contaFrequencia que recebe um array (pode ter números ou strings) e retorna um objeto onde cada chave é um item do array e seu valor é o número de vezes que o item apareceu.
// Exemplo de entrada: ['maçã', 'banana', 'maçã', 'laranja', 'maçã']
// Saída esperada (retorno da função): { maçã: 3, banana: 1, laranja: 1 }
function contaFrequencia(array) {
    const freq = {};
    for (let char of array) {
        if (freq[char] == undefined) {
            freq[char] = 1
        } else {
            freq[char] += 1;
        }
    }
    return freq
}

function contaFrequenciaV2(array) {
    const freq = {};
    for (let char of array) {
        freq[char] = (freq[char] || 0) + 1;
    }

    return freq
}

console.log(contaFrequencia(items));
console.log(contaFrequenciaV2(items));

// Exercício 8: Verificador de Palíndromo
// 🎯 A Tarefa: Escreva uma função checaPalindromo que recebe uma string e retorna true se ela for um palíndromo e false caso contrário.
// Regra: Considere apenas strings sem espaços e em minúsculas por enquanto.
// Exemplo de entrada 1: "arara"
// Saída esperada 1: true
// Exemplo de entrada 2: "javascript"
// Saída esperada 2: false
function checaPalindromo(string) {
    let newString = ''
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return newString == string
}

function checaPalindromoV2(string) {
    let newString = string.split('').reverse().join('');
    return newString == string;
}

console.log(checaPalindromo('arara'));
console.log(checaPalindromoV2('arara'));

// Exercício 9: Invertendo um Array "In-Place"
// 🎯 A Tarefa: Escreva uma função inverteArray que recebe um array e o inverte sem criar um novo array.
// Exemplo: let meuArray = [1, 2, 3, 4, 5]
// Após chamar inverteArray(meuArray), meuArray deve ser: [5, 4, 3, 2, 1]
function inverteArray(array) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp = array[i];
        array[i] = array[array.length - i];
        array[array.length - i] = temp;
    }
    return array
}

function inverteArray2(array) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length; j >= i; j--) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
    }
    return
}

function inverteArray3(array) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio < fim) {
        let temp = array[inicio];
        array[inicio] = array[fim];
        array[fim] = temp;

        inicio++;
        fim--;
    }
    return array;
}
let myArray = [1, 2, 3, 4, 5];
console.log(inverteArray3(myArray));

// 🔥 Trilha de Aquecimento em JavaScript - Nível 4
// 🎯 A Tarefa: Escreva uma função checaAnagrama que recebe duas strings, s1 e s2, e retorna true se elas forem anagramas uma da outra, e false caso contrário.
// Exemplo de entrada 1: "amor", "roma"
// Saída esperada 1: true
// Exemplo de entrada 2: " Gato ", "toga" (Dica: primeiro trate os espaços e letras maiúsculas/minúsculas!)
// Saída esperada 2: true
// Exemplo de entrada 3: "casa", "casaco"
// Saída esperada 3: false

function checaAnagrama(string1, string2) {
    return string1.length == string2.length
}

console.log(checaAnagrama('amar', 'odio'));

// Exercício 11: Agrupando Pessoas por Cidade
// 🎯 A Tarefa: Você tem um array de objetos, onde cada objeto representa uma pessoa. Escreva uma função agrupaPorCidade que recebe esse array e retorna um objeto onde as chaves são os nomes das cidades e os valores são arrays com os nomes das pessoas que moram naquela cidade.
// Exemplo de entrada:

// JavaScript

// const pessoas = [
//     { nome: 'Ana', cidade: 'São Paulo' },
//     { nome: 'Bruno', cidade: 'Rio de Janeiro' },
//     { nome: 'Carlos', cidade: 'São Paulo' },
//     { nome: 'Daniela', cidade: 'Salvador' }
// ];
// Saída esperada (retorno da função):

// JavaScript

// {
//     'São Paulo': ['Ana', 'Carlos'],
//     'Rio de Janeiro': ['Bruno'],
//     'Salvador': ['Daniela']
// }

const pessoas = [
    { nome: 'Ana', cidade: 'São Paulo' },
    { nome: 'Bruno', cidade: 'Rio de Janeiro' },
    { nome: 'Carlos', cidade: 'São Paulo' },
    { nome: 'Daniela', cidade: 'Salvador' }
];

function agrupaPorCidade(pessoas) {
    let resultado = {};

    for (let pessoa of pessoas) {
        let cidade = pessoa.cidade;
        let nome = pessoa.nome;

        if (!resultado[cidade]) {
            resultado[cidade] = []
        }
        resultado[cidade].push(nome);
    }
    return resultado;
}

console.log(agrupaPorCidade(pessoas));