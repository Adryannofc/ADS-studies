const container = document.querySelector(".displayCards");
const button = document.querySelector(".container-button");

function createCard(){
    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("div");
    header.classList.add("header-card");

    const name = document.createElement("h3");
    name.textContent = "Bulbasaur";

    const id = document.createElement("p");
    id.textContent = "#001";

    header.appendChild(name);
    header.appendChild(id);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const image = document.createElement("img");
    image.src = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png";
    imageContainer.appendChild(image);

    const type = document.createElement("div");
    type.classList.add("type");
    type.textContent = "Grass";

    imageContainer.appendChild(type);

    card.appendChild(header);
    card.appendChild(imageContainer);


    container.appendChild(card);
}

createCard();