function Animal(nome, classe){
    this.nome = nome;
    this.classe = classe;

    this.dormir = () => {
        console.log(`O ${classe} chamado ${nome} está andando!`);
    }

    this.comer = () => {
        console.log(`O ${classe} chamado ${nome} está comendo`)
    }
}

const animal1 = new Animal('Scooby', 'cachorro');
animal1.dormir();

const animal2 = new Animal('Garfield', 'gato');
animal2.comer()
