const moveCactus = setInterval(() => {
    if (isGameOver) {
      clearInterval(moveCactus);
      return;
    }

    let right = parseInt(cactus.style.right)  0;
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
  if (e.code === "Space"  e.code === "ArrowUp") {
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
