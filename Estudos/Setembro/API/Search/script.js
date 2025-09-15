const input = document.getElementById("search-input");
const content = document.getElementById("cardPokemon")

// func = funcao a ser executada
// delay = tempo de espera em ms
function debounce(func, delay) {

    let timeout;

    return function(...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

async function createCard(data) {
    content.innerHTML = "";

    const card = document.createElement('div');
    card.className = 'pokemon-card';

    const pokemonImage = document.createElement("img");
    pokemonImage.src = data.sprites.other['official-artwork'].front_default;
    pokemonImage.atl = `Image do ${data.name}`;

    const pokemonName = document.createElement("h2");
    pokemonName.textContent = name.charAt(0).toLowerCase() + name.slice(1);

    card.appendChild(pokemonImage);
    card.appendChild(pokemonName);

    content.appendChild(card);
}

async function getPokemon(identifier){

    if(!identifier) {
        content.innerHTML = "";
        return;
    }

    console.log(`Buscando por "${identifier}"...`);

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`);

        if(!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();
        console.log("Pokemon encontrado! ", data);
        createCard(data);
    } catch(error) {
        console.error("Houve um problema com a busca:", error.message);
    }
}

input.addEventListener("input", debounce(() => {
    const name = input.value.trim().toLowerCase();
    getPokemon(name);
    console.log(name)
}, 500));