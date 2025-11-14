const contadorAcessos = (function(nome) {
    let acessos = 0;
    function registrarAcesso() {    
        acessos == 0 ? console.log(`${nome} faca seu cadastro`) : console.log(`${nome} Bem-vindo novamente`); 
        acessos++;
    }
    return {
        registrarAcesso
    }
})("Adryann");
 
 
// Teste:
contadorAcessos.registrarAcesso();
contadorAcessos.registrarAcesso();