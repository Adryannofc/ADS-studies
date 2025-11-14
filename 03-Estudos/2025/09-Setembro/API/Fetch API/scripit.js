// Exercício 1: A Primeira Chamada 🎯
// O Objetivo: Fazer a requisição mais simples possível e garantir que você consegue acessar os dados.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        console.log(posts);
    });

// Exercício 2: Pesca de Dados Específicos 🎣
// O Objetivo: Aprender a buscar um item específico e extrair uma informação de dentro dele.
fetch('https://jsonplaceholder.typicode.com/posts/10')
    .then(res => res.json())
    .then(post => {
        console.log(`O titulo do post é: ${post.title}`)
    });

// Exercício 3: Lidando com o Lado Sombrio - Erros 🐛
// O Objetivo: Praticar o tratamento de erros, tanto os de rede quanto os de resposta do servidor (como um "Não Encontrado" 404).
fetch('https://jsonplaceholder.typicode.com/posts/1000')
    .then(res => {
        if (!res.ok) {
            throw new Error(`Erro ${res.status}: ${res.statusText}`)
        }
        return res.json();
    })
    .then(post => {
        console.log("Post encontrado: ", post);
    })
    .catch(err => {
        console.error("Ops, algo deu errado com a requisição:", err.message);
    })

// Exercício 4: A Corrente do Bem - Requisições Encadeadas 🔗
// O Objetivo: Simular um cenário real onde uma requisição depende do resultado da anterior.
fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(res => {
    if(!res.ok){
        throw new Error(`Erro ${res.status}: ${res.statusText}`)
    }
    return res.json();
        
    })
    .then(user => {
        console.log(`Usuario: ${user.name}`);
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);

    })
    .then(res => res.json())
    .then(post => {
        console.log(post)
    })
    .catch(err => {
        console.error("Ops, algo deu errado com a requisicao:", err.message);
    })

// Exercício 5: O Desafio Final - O Agregador de Dados 🏆
// O Objetivo: Juntar tudo o que você aprendeu para construir uma visualização de dados completa no console.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        if (!res.ok) {
            throw new Error(`Erro ${res.status}: ${res.statusText}`);
        }
        return res.json();
    })
    .then(post => {
        console.log('--- RELATÓRIO DO POST ---');
        console.log(`Titulo Post: ${post.title}`);

        return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}: ${res.statusText}`)
                }
                return res.json()
            })
            .then(autor => {
                console.log(`Autor: ${autor.name}`)
                return fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
            })
        
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error: ${res.status}: ${res.statusText}`)
        }
        return res.json();
    })
    .then(comments => {
        console.log(`--- COMENTÁRIOS ${comments.length} ---`);
        for (i = 0; i < comments.length; i++) {
            console.log(`${i + 1} - ${comments[i].name}:`);
            console.log(comments[i].body)
            console.log('');
        }
    })
    .catch(err => {
        console.error("Ops, algo deu errado com a requisicao:", err.message);
    })