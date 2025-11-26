const resultText = document.getElementById("resultText");
const computerBtn = document.getElementById("computerChoiceBtn");

const compScoreEl = document.getElementById("compScore");
const userScoreEl = document.getElementById("userScore");

let userChoice = "";
let userScore = 0;
let compScore = 0;

document.querySelectorAll(".rps-btn").forEach((btn) => {
  btn.onclick = () => (userChoice = btn.querySelector("img").alt);
});

const getComp = () =>
  ["rock", "scissors", "paper"][Math.floor(Math.random() * 3)];

computerBtn.onclick = () => {
  if (!userChoice) {
    resultText.textContent = "Спочатку виберіть ваш варіант!";
    return;
  }

  const comp = getComp();

  let result = "";
  if (userChoice === comp) result = "Нічия!";
  else if (
    (userChoice === "rock" && comp === "scissors") ||
    (userChoice === "scissors" && comp === "paper") ||
    (userChoice === "paper" && comp === "rock")
  ) {
    result = "Ви виграли!";
    userScoreEl.textContent = ++userScore;
  } else {
    result = "Комп’ютер виграв!";
    compScoreEl.textContent = ++compScore;
  }

  resultText.textContent = `Ви: ${userChoice} | Комп'ютер: ${comp} → ${result}`;
};
