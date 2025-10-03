// Exercício 1: Acessando e Modificando Propriedades
// 🎯 A Tarefa:
// Dado o objeto produto abaixo, escreva uma função descreveProduto que retorna uma string no formato: "O produto [nome] custa R$ [preco].".
// Escreva uma segunda função aplicaDesconto que recebe o objeto produto e um valor de desconto (ex: 10), e atualiza o preço do produto aplicando o desconto. A função não deve retornar nada, apenas modificar o objeto.
// JavaScript
// const produto = {
//     nome: 'Notebook',
//     preco: 2500,
//     emEstoque: true
// };

const produto = {
    nome: 'Notebook',
    preco: 2500,
    emEstoque: true
};



function aplicaDesconto(produto, valor) {
    produto.preco = valor
}

function descreveProduto(produto) {
    aplicaDesconto(produto, 1000)
    return console.log(`O produto ${produto.nome} custa R$ ${produto.preco}`);
}

descreveProduto(produto);


// Exercício 2: Iterando Sobre Propriedades
// 🎯 A Tarefa: Escreva uma função listaPropriedades que recebe um objeto e imprime no console cada chave e seu respectivo valor no formato chave: valor.
// Exemplo de entrada:
// JavaScript
// const carro = {
//     modelo: 'Corolla',
//     ano: 2022
// };
// Saída esperada no console:

// marca: Toyota
// modelo: Corolla
// ano: 2022
console.log('-----------------------------------')
const carro = {
    modelo: 'Corolla',
    ano: 2022
};

function listaPropriedades(objeto) {
    for (let chave in objeto) {
        console.log(`${chave}: ${objeto[chave]}`)
    }
}

listaPropriedades(carro);

// Exercício 3: Verificando a Existência de uma Propriedade
// 🎯 A Tarefa: Escreva uma função temPropriedade que recebe um objeto e uma string (o nome da propriedade). A função deve retornar true se a propriedade existir no objeto e false caso contrário.
// Exemplo de entrada 1: produto, "preco" -> true
// Exemplo de entrada 2: produto, "cor" -> false
console.log('-----------------------------------');
function temPropriedade(objeto, string) {
    for (chave in objeto) {
        if (chave == string);
        return true
    }
    return false
}

console.log(temPropriedade(carro, "ano"));


// Exercício 4: Combinando Objetos (Merge)
// 🎯 A Tarefa: Escreva uma função combinaObjetos que recebe dois objetos, obj1 e obj2, e retorna um novo objeto que contém todas as propriedades de ambos. Se uma chave existir nos dois objetos, o valor de obj2 deve prevalecer.
// Exemplo de entrada:
// JavaScript
// const configuracoesBase = { tema: 'claro', notificacoes: true };
// const configuracoesUsuario = { notificacoes: false, idioma: 'pt-br' };
// Saída esperada (retorno da função): { tema: 'claro', notificacoes: false, idioma: 'pt-br' }

const configuracoesBase = { tema: 'claro', notificacoes: true };
const configuracoesUsuario = { notificacoes: false, idioma: 'pt-br' };

function combinaObjetos(objeto1, objeto2) {
    let newObjeto = {...objeto1, ...objeto2};
    return console.log(newObjeto)
}

combinaObjetos(configuracoesBase, configuracoesUsuario);