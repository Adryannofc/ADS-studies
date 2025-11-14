import { gerarSaudacao } from './saudacao.js';
import { obterSaudacaoPorHora } from './tempo.js'


const msg = document.getElementById('mensagem');
msg.innerHTML = gerarSaudacao(prompt("Digite seu nome"), obterSaudacaoPorHora())