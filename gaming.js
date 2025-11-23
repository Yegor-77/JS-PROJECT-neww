const resultText = document.getElementById("resultText");
const computerBtn = document.getElementById("computerChoiceBtn");

const compScoreEl = document.getElementById("compScore");
const userScoreEl = document.getElementById("userScore");

let userScore = 0;
let compScore = 0;

const choices = ["rock", "scissors", "paper"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(user, computer) {
  if (user === computer) return "draw";

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "user";
  }
  return "computer";
}

document.querySelectorAll(".rps-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const userChoice = btn.dataset.choice;
    const computerChoice = getComputerChoice();

    const winner = getWinner(userChoice, computerChoice);

    computerBtn.textContent = "Комп’ютер: " + computerChoice;

    if (winner === "user") {
      resultText.textContent = "Ви виграли раунд!";
      resultText.style.color = "green";
      userScore++;
    } else if (winner === "computer") {
      resultText.textContent = "Комп’ютер виграв!";
      resultText.style.color = "red";
      compScore++;
    } else {
      resultText.textContent = "Нічия!";
      resultText.style.color = "black";
    }

    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  });
});
