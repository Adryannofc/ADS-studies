const idPokemon = document.querySelector('#idPokemon');
console.log(`Peguei o Input ${idPokemon}`);

const btn = document.querySelector('#btn');
console.log(`Peguei o Botão ${btn}`);

const image = document.querySelector('#image');

const fetchApi = async (value) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`).then((response) => response.json()).then((data) => {
        console.log(data);
        return data
    });
    console.log(result);
    return result
}

btn.addEventListener('click', async (event) => {
    event.preventDefault();

    const result = await fetchApi(idPokemon.value);
    image.src = result.sprites.front_default;
})