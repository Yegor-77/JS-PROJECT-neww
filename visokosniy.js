const input = document.querySelector(".visokosniy input");
const button = document.querySelector(".visokosniy-button");
const result = document.querySelector(".visokosniy-p");

button.addEventListener("click", () => {
  const year = parseInt(input.value); 

  if (!year) {
    result.textContent = "Будь ласка, введіть рік!";
    result.className = "visokosniy-p red";
    return;
  }

  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (isLeap) {
    result.textContent = "Ви народилися у високосний рік!";
    result.className = "visokosniy-p green";
  } else {
    result.textContent = "Ви народилися у звичайний рік.";
    result.className = "visokosniy-p red";
  }
});















const dino = document.getElementById("dino");
const game = document.getElementById("game");
const scoreEl = document.getElementById("score");
const gameOverEl = document.getElementById("game-over");
const restartBtn = document.getElementById("restart");

let isJumping = false;
let isGameOver = false;
let score = 0;
let speed = 6;
let cactusInterval;








function jump() {
  if (isJumping || isGameOver) return;
  isJumping = true;
  dino.classList.add("jump");
  setTimeout(() => {
    dino.classList.remove("jump");
    isJumping = false;
  }, 600);
}





function createCactus() {
  if (isGameOver) return;
  const cactus = document.createElement("div");
  cactus.classList.add("cactus");
  cactus.style.right = "0px";
  game.appendChild(cactus);

  const moveCactus = setInterval(() => {
    if (isGameOver) {
      clearInterval(moveCactus);
      return;
    }

    let right = parseInt(cactus.style.right) || 0;
    right += speed;
    cactus.style.right = right + "px";


    

    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
      cactusRect.left < dinoRect.right &&
      cactusRect.right > dinoRect.left &&
      cactusRect.top < dinoRect.bottom &&
      cactusRect.bottom > dinoRect.top
    ) {
      gameOver();
    }


    if (right > window.innerWidth + 50) {
      cactus.remove();
      clearInterval(moveCactus);
      score++;
      updateScore();
    }
  }, 20);
}















// это ускорение
function updateScore() {
  scoreEl.textContent = String(score).padStart(5, "0");
  if (score % 1 === 0 && score > 0) {
    speed += 30;
  }
}










// конец
function gameOver() {
  isGameOver = true;
  gameOverEl.style.display = "block";
  clearInterval(cactusInterval);
}

















// рестарт
function restart() {
  isGameOver = false;
  isJumping = false;
  score = 0;
  speed = 6;
  updateScore();
  gameOverEl.style.display = "none";










  // кикаем кактусы
  document.querySelectorAll(".cactus").forEach((c) => c.remove());
  cactusInterval = setInterval(createCactus, 1500 - Math.min(score * 2, 800));
}










// Управление
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") {
    e.preventDefault();
    if (isGameOver) {
      restart();
    } else {
      jump();
    }
  }
});

restartBtn.addEventListener("click", restart);

// старт
restart();