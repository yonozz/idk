// Obtém o botão por seu ID
const changeColorButton = document.getElementById('changeColorButton');

//Obtém o botao por seu ID
const h1 = document.getElementById('h1');

//Obtém o botao por seu ID
const p1 = document.getElementById('p1')

// Flag para acompanhar o estado da cor
let isWhite = true;

// Adiciona um ouvinte de evento de clique ao botão
changeColorButton.addEventListener('click', () => {
  // Alterna entre as cores
  if (isWhite) {
    h1.style.color = '#fcf1f1';
    p1.style.color = '#fcd0d0';
    document.body.style.backgroundColor = '#0f0f0f';
  } else {
    document.body.style.backgroundColor = '#fff7f7';
    h1.style.color = '#0f0f0f';
    p1.style.color = '#0f0f0f';
  }

  // Alterna a flag de estado da cor
  isWhite = !isWhite;
});
