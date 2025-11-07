const idioma = navigator.language || navigator.userLanguage
const idiomaSelect = document.getElementById('idioma')
const titulo = document.getElementById('titulo');
console.log(idiomaSelect);
console.log(idiomaSelect.translate);
const mensagens = {
  "pt-BR": {
    titulo: "Bem-vindo ao Mini App Internacional ",
  },
  "en-US": {
    titulo: "Welcome to the International Mini App ",
  }
};

function atualizarInterface(locale){
    titulo.textContent = mensagens[locale].titulo
}

idiomaSelect.value = idioma;
atualizarInterface(idioma);

idiomaSelect.addEventListener("change", (e) => {
  atualizarInterface(e.target.value);
});