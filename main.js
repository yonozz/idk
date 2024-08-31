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
    document.body.style.backgroundColor = '#dbcece';
    h1.style.color = '#0f0f0f';
    p1.style.color = '#0f0f0f';
  }

  // Alterna a flag de estado da cor
  isWhite = !isWhite;
});

document.querySelectorAll('.snowflake').forEach(snowflake => {
    const randomX = Math.random() * 100; // Posição horizontal aleatória
    const randomDuration = Math.random(); // Velocidade de queda aleatória

    snowflake.style.left = `${randomX}vw`; // Define a posição inicial horizontal
    snowflake.style.setProperty('--random-duration', randomDuration); // Define a duração da animação
});

// Obtém o botão por seu ID
const toggleSnowButton = document.getElementById('toggleSnowButton');
const snowContainer = document.querySelector('.snow-container');

let isSnowing = true; // Flag para acompanhar o estado da neve

// Adiciona um ouvinte de evento de clique ao botão
toggleSnowButton.addEventListener('click', () => {
  if (isSnowing) {
    snowContainer.classList.add('paused'); // Pausa a animação
  } else {
    snowContainer.classList.remove('paused'); // Retoma a animação
  }

  isSnowing = !isSnowing; // Alterna o estado
});

const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekbar = document.getElementById('seekbar');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '❚❚';
        playPauseButton.className = 'pause';
    } else {
        audio.pause();
        playPauseButton.textContent = '▶';
        playPauseButton.className = 'play';
    }
});

audio.addEventListener('timeupdate', () => {
    const current = Math.floor(audio.currentTime);
    const total = Math.floor(audio.duration);

    seekbar.value = (current / total) * 100;

    currentTime.textContent = formatTime(current);
    duration.textContent = formatTime(total);
});

seekbar.addEventListener('input', () => {
    const seekTo = (seekbar.value / 100) * audio.duration;
    audio.currentTime = seekTo;
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}
