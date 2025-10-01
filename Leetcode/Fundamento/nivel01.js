const myArray = [1, 5, 7, 10, 22, 6, 88];
const yourArray = [1, 3, 7, 12, 13, 20, 6];
// Exercício 1: Percorrendo um Array
// 🎯 A Tarefa: Escreva uma função chamada imprimeNumeros que recebe um array de números como argumento e simplesmente imprime cada número no console.
// Exemplo de entrada: [5, 10, 15]
// Saída esperada no console:
// 5
// 10
// 15
function imprimeNumeros(array){
    for(let i = 0; i < array.length; i++){
        console.log(`Array[${i}] = ${array[i]} \n`);
    }
}
imprimeNumeros(myArray);

// Exercício 2: Contando Elementos com uma Condição
// 🎯 A Tarefa: Escreva uma função chamada contaPares que recebe um array de números e retorna a quantidade de números pares que existem nele.
// Exemplo de entrada: [1, 2, 3, 4, 5, 6]
// Saída esperada (retorno da função): 3 (porque 2, 4 e 6 são pares).
function contaPares(array){
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            cont++;
        }
    }
    return cont
}
console.log(`Seu array contem ${contaPares(myArray)} numeros pares`);

// Exercício 3: Buscando um Elemento
// 🎯 A Tarefa: Escreva uma função chamada encontraNumero que recebe dois argumentos: um array de números e um número alvo. A função deve retornar true se o alvo estiver no array, e false caso contrário.
// Exemplo de entrada 1: [10, 20, 30], alvo = 20
// Saída esperada 1: true
// Exemplo de entrada 2: [10, 20, 30], alvo = 5
// Saída esperada 2: false
function encontraNumero(array, alvo){
    for(let i = 0; i < array.length; i++){
        if(array[i] === alvo){
            return true
        }
    }
    return false
}

function encontrarNumeroV2(array, alvo){
    for(numero of array){
        if(numero === alvo){
            return true
        }
    }
    return false
}
console.log(encontraNumero(myArray, 5));
console.log(encontrarNumeroV2(myArray, 5));

// Exercício 4: Transformando um Array
// 🎯 A Tarefa: Escreva uma função chamada dobraValores que recebe um array de números e retorna um novo array onde cada número é o dobro do original.
// Exemplo de entrada: [1, 2, 3, 4]
// Saída esperada (retorno da função): [2, 4, 6, 8]
function dobraValores(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i] * 2);
    }
    return newArray
}
imprimeNumeros(dobraValores(myArray));

// Exercício 5: Encontrando o Maior Valor
// 🎯 A Tarefa: Escreva uma função chamada encontraMaior que recebe um array de números e retorna o maior número dentro dele.
// Restrição: Você não pode usar funções prontas como Math.max(). O objetivo é construir a lógica do zero!
// Exemplo de entrada: [10, 50, 2, 8, 45]
// Saída esperada (retorno da função): 50
function encontraMaior(array){
    let maior = 0;
    for(number of array){
        if(number > maior){
            maior = number
        }
    }
    return maior;
}
console.log("Maior", encontraMaior(myArray));

// Exercício 6: Encontrando Itens em Comum
// 🎯 A Tarefa: Escreva uma função chamada encontraComuns que recebe dois arrays de números e retorna um novo array contendo apenas os números que aparecem em ambos os arrays de entrada.
// Exemplo de entrada: [1, 2, 3, 4], [10, 2, 5, 1]
// Saída esperada (retorno da função): [1, 2]
function encontraComuns(array1, array2){
    let newArray = [];
    for(let i = 0; i < array1 .length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array1[i] == array2[j]){
                newArray.push(array1[i]);
                break;
            }
            
        }
    }
    return newArray
}
imprimeNumeros(encontraComuns(myArray, yourArray))