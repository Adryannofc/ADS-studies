/* 01 - Crie uma função construtora chamada Pessoa que aceite nome e idade como parâmetros. Dentro do construtor, atribua esses parâmetros às propriedades nome e idade do objeto que está sendo criado. Depois, crie duas instâncias de Pessoa: uma para você e outra para uma pessoa fictícia. */

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;

    this.apresentar = () => {
        console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`)
    }
}

const pessoa1 = new Pessoa('Adryann', '20');

console.log(pessoa1.nome);
console.log(pessoa1.idade);

/* 02 - Modifique a função construtora Pessoa do exercício anterior. Adicione um método chamado apresentar que exiba no console uma string como: "Olá, meu nome é [nome] e eu tenho [idade] anos.". */

const pessoa2 = new Pessoa('Paullynna', '18');

pessoa2.apresentar();

/* 03 - Reescreva a função construtora Pessoa (com o método apresentar) utilizando a sintaxe de class do ES6. O resultado final deve ser o mesmo, mas a estrutura do código será diferente. */

class PessoaClass {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const adryann = new PessoaClass('Adryann', 25);
adryann.apresentar();

/* 04 - Crie uma classe chamada Produto. O construtor deve aceitar nome, preco e estoque como parâmetros. Além disso, a classe deve ter um método chamado vender que aceite uma quantidade como parâmetro, diminua o estoque e retorne o valor total da venda (preco * quantidade). Não se esqueça de verificar se a quantidade vendida é menor ou igual ao estoque disponível. */

class Produto {
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender(quantidade){
        if(quantidade > this.estoque){
            console.error(`Estoque insuficiente! Temos apenas ${estoque} unidades de ${nome}.`);
            return 0;
        }

        this.estoque -= quantidade;
        const valorTotal = this.preco * quantidade;

        console.log(`Venda de ${quantidade} unidades de ${this.nome} realizada com sucesso!`);
        
        return valorTotal
    }
}

const notebook = new Produto('Notebook', 2500, 15);
notebook.vender(1);

/* 05 - Crie uma classe Animal com um construtor que receba nome e um método fazerSom que exiba "Som genérico de animal" no console.

Depois, crie uma classe Cachorro que herda de Animal. O construtor da classe Cachorro deve receber nome e raca. Ele deve chamar o construtor da classe pai (Animal) e também definir a propriedade raca. Por fim, sobrescreva o método fazerSom na classe Cachorro para que ele exiba "birl!". */

class Animal {
    constructor(nome){
        this.nome = nome;
    }

    fazerSom() {
        console.log(`SOM`);
    }
}

class Cachorro extends Animal {
    constructor(nome, raca){
        super(nome);

        this.raca = raca;
    }

    fazerSom(){
        console.log(`LATIDO`);
    }
}

const animal = new Animal('Galinha');
const cachorro = new Cachorro('Rex', 'Pitbull');

animal.fazerSom();
cachorro.fazerSom();

class Filme {
    constructor(titulo, ano, genero){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = !genero ? "Nao Classificado" : genero;
    }
}

const titanic = new Filme("Titanic", 2000);
console.log(titanic.genero);

/* 07 - Crie duas classes simples, Circulo e Quadrado. Depois, crie uma instância de cada uma. Escreva uma função chamada descreverForma que receba um objeto como parâmetro e use o operador instanceof para verificar se o objeto é uma instância de Circulo ou Quadrado, exibindo uma mensagem apropriada. */

class Circulo {
    constructor(raio){
        this.raio = raio;
    }
}

class Quadrado {
    constructor(lado){
        this.lado = lado;
    }
}

function descreverForma(forma){
    if(forma instanceof Circulo){
        console.log(`Este objeto é um Circulo! (Raio: ${forma.raio})`);
    } else if(forma instanceof Quadrado){
        console.log(`Este objeto é um Quadrado! (Lados: ${forma.lado})`);
    } else {
        console.log('Forma nao detectada');
    }
}

const circulo = new Circulo(10);
descreverForma(circulo)

const quadrado = new Quadrado(4);
descreverForma(quadrado);

/* 08 - Crie uma classe CarrinhoDeCompras. O construtor não precisa receber parâmetros, mas deve inicializar uma propriedade itens como um array vazio. A classe deve ter os seguintes métodos:

- adicionarItem(produto): Recebe um objeto produto (pode usar a classe Produto do exercício 4) e o adiciona ao array itens.

- calcularTotal(): Calcula e retorna o valor total de todos os produtos no carrinho.

- listarItens(): Exibe no console o nome de cada item no carrinho.

 */


class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionarItem(produto, quantidade){
        produto.estoque -= quantidade;
        this.itens.push(produto);
        console.log(`${quantidade} de ${produto.nome} foi adicionado ao carrinho!`);
    }

    calcularTotal(){
        const total = this.itens.reduce((acumulador, produto) => acumulador + produto.preco, 0);
        return total;
    }

    listarItens(){
        console.log('\n--- Itens Carrinho ---');
        if(this.itens.length === 0){
            console.log('O carrinho está vazio');
            return;
        }

        this.itens.forEach(produto => {
            console.log(`- ${produto.nome} (RS ${produto.preco})`);
        })
        console.log('-------------------------');
    }
}

const celular = new Produto("Celular", 1500, 5);
const sabao = new Produto("Sabao", 3, 55);

const carrinho = new Carrinho();
carrinho.adicionarItem(notebook, 5);
carrinho.adicionarItem(celular, 10);
carrinho.adicionarItem(sabao, 20);


carrinho.listarItens();
console.log(carrinho.calcularTotal());