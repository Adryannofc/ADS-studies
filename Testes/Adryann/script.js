fetch('https://api.exemplo.com/dados')
  .then(response => {
    // Checa se a resposta HTTP é 200-299
    if (!response.ok) {
      throw new Error('Falha na rede ou erro HTTP: ' + response.status);
    }
    return response.json(); // Retorna uma nova Promise
  })
  .then(data => {
    console.log(data); // Dados prontos para uso
  })
  .catch(error => {
    console.error('Houve um problema com a sua operação fetch:', error);
  });