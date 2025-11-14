export function obterSaudacaoPorHora(){
    const agora = new Date();
    if(agora.getHours < 12) {
        return "Bom dia"
    } else if(agora.getHours >= 12 && agora.getHours <= 18) {
        return "Boa tarde"
    }
    return "Boa noite"
}