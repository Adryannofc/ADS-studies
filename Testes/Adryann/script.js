const produto = {
    nome: 'Notebook',
    preco: 2500,
    emEstoque: true
};

function imprimePropriedades(objeto){
    for(chave in objeto){
        console.log(`${chave}: ${objeto[chave]}`)
    }
}

imprimePropriedades(produto);