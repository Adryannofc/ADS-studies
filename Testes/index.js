function aleatorio(msg, temp){
    setTimeout(() => {
        console.log(msg)
    },temp)
}

function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

aleatorio("Mensagem 1", rand(1, 3));
aleatorio("Mensagem 2", rand(1, 3));
aleatorio("Mensagem 3", rand(1, 3));