const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const music = new Audio('./sounds/theme-song.mp3');
const musicGameOver = new Audio('./sounds/music-game-over.mp3');
const jump = () => {
  mario.classList.add('jump');

  setTimeout(()=>{
    mario.classList.remove('jump');
  }, 500)
}

const loop = setInterval(()=>{
  music.play();
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

  if(pipePosition <= 120 && pipePosition > 50 && marioPosition < 130) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`

    mario.src = './imgs/mario-dead.png';
    mario.style.width = '100px';
    mario.style.marginLeft = '25px';

    clearInterval(loop);
    music.pause();
    musicGameOver.play();
  }
}, 10);

document.addEventListener('keydown', jump);