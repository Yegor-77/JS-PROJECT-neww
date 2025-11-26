document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".guess-input");
  const btn = document.querySelector(".guess-button");
  const result = document.querySelector(".guess-result");

  btn.addEventListener("click", () => {
    const value = Number(input.value);

    if ((!value, value < 1, value > 10)) {
      result.textContent = "Будь ласка, введіть число від 1 до 10!";
      result.style.color = "orange";
      return;
    }

    const randomNum = Math.floor(Math.random() * 10) + 1;

    if (value === randomNum) {
      result.textContent = `Вітаю! Ви вгадали число ${randomNum}!`;
      result.style.color = "green";
    } else {
      result.textContent = `Ви програли, комп’ютер загадав ${randomNum}.`;
      result.style.color = "red";
    }
  });
});
