// 1. Números pares 🔢
// Escreva um programa que mostre todos os números pares de 1 a 50.
let numbers = [];

function par(array){
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            console.log(`${array[i]} = PAR`);
        } else {
            console.log(`${array[i]} = IMPAR`);
        }
    }
}

function preencher(array, ate){
    for(i = 1; i <= ate; i++){
        array.push(i);
    }
    par(array)
}

// preencher(numbers, 50);


// 2. Fatorial 📐
// Crie uma função que receba um número e retorne o fatorial dele.
// Exemplo: fatorial(5) → 120.

function fatorial(number){
    if(number === 1){
        return number
    }

    return number * fatorial(number - 1);
}

// console.log(fatorial(5));

// 3. Palíndromo 🪞
// Faça um programa que verifique se uma palavra é um palíndromo.
// Exemplo:

// "arara" → verdadeiro
// "javascript" → falso

function palindronomo(string){
    let newString = string.split('').reverse().join('');
    return string === newString
}

// console.log(palindronomo("arara"));

function tabuada(){
    for(let i = 0; i <= 10; i++){
        for(let j = 0; j <= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`)
        }
        console.log("");
    }
}

// tabuada();

// 5. Fibonacci 🌀
// Crie um algoritmo que mostre os n primeiros números da sequência de Fibonacci.
// Exemplo: n = 6 → 0, 1, 1, 2, 3, 5.
function fibonacci(n){
    let sequencia = [0, 1];
    for(i = 2; i < n; i++){
        const proximoNumero = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoNumero);
    }

    return sequencia
}

// console.log(fibonacci(5));

// 6. Maior número de um array 📦
// Dado um array de números, encontre o maior valor dentro dele.
// Exemplo: [3, 9, 2, 7, 15] → 15.

const lista = [3, 9, 2, 15, 12, 7];

function maior(array){
    let temp = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] > temp){
            temp = array[i];
        }
    }
    return temp;
}

console.log(maior(lista));

console.log(lista.sort());