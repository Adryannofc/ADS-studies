function createCard() {
  const container = document.querySelector('.container-card');
  if (!container) return;

  const card = document.createElement('article');
  card.classList.add('card', 'hidden'); // começa invisível

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

for (let i = 0; i < 20; i++) {
  createCard()

}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Card entrou na tela → mostra
      entry.target.classList.add('show');
    } else {
      // Card saiu da tela → esconde
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.3, // só aciona quando 30% do card estiver visível
});

// Pega todos os cards e começa a observar
document.querySelectorAll('.card').forEach(card => observer.observe(card));