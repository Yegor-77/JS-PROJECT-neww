// 1 easy
const input = document.querySelector(".random-input");
const button = document.querySelector(".random-button");
const result = document.querySelector(".result-random");

const randomNumber = Math.floor(Math.random() * 10) + 1;

button.addEventListener("click", () => {
  const userNumber = Number(input.value);

  if (userNumber < 1 || userNumber > 10 || isNaN(userNumber)) {
    result.textContent = "Будь ласка, введіть число від 1 до 10!";
    result.style.color = "orange";
    return;
  }

  if (userNumber === randomNumber) {
    result.textContent = ` Вітаю! Ви вгадали число ${randomNumber}!`;
    result.style.color = "green";
  } else {
    result.textContent = ` Ви програли, комп’ютер загадав ${randomNumber}.`;
    result.style.color = "red";
  }
});

//2 harddd

// не начав ще я це робити
