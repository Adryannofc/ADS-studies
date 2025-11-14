const characterId = document.querySelector('#characterId');
const button = document.querySelector('#button');
const content = document.querySelector('#content');
const image = document.querySelector('#img');

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`).then((response) => response.json()).then((data) => {
        console.log(data)
        return data;
    });
    console.log(result);
    return result
}

button.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(characterId.value);
    image.src = `${result.image}`
});