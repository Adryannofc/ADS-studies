function createCard() {
  const container = document.querySelector('.container-card');
  if (!container) return;

  const card = document.createElement('article');
  card.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('card-image');
  img.src = 'https://pngimg.com/d/dog_PNG50406.png'; 
  img.alt = 'Imagem do card'; 

  const content = document.createElement('div');
  content.classList.add('card-content');

  const title = document.createElement('h2');
  title.classList.add('card-title');
  title.textContent = 'Título do Card';

  const paragraph = document.createElement('p');
  paragraph.classList.add('card-paragraph');
  paragraph.textContent = 'Parágrafo de descrição do card.';

  const link = document.createElement('a');
  link.classList.add('card-link');
  link.href = '#'; 
  link.textContent = 'Saiba mais';

  // montagem
  content.append(title, paragraph, link);
  card.append(img, content);
  container.appendChild(card);
}


createCard()