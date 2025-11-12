const randomInput = document.querySelector(".random-inpute");
const randomButton = document.querySelector(".random-button");
const randomResult = document.querySelector(".result-random");

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

randomButton.addEventListener("click", () => {
  const userNumber = Number(randomInput.value);

  if (userNumber < 1 || userNumber > 10 || isNaN(userNumber)) {
    randomResult.textContent = "Будь ласка, введіть число від 1 до 10!";
    randomResult.style.color = "orange";
    return;
  }

  if (userNumber === randomNumber) {
    randomResult.textContent = ` Вітаю! Ви вгадали число ${randomNumber}!`;
    randomResult.style.color = "green";
    console.log("hello win");
  } else {
    randomResult.textContent = ` Ви програли, комп’ютер загадав ${randomNumber}.`;
    randomResult.style.color = "red";
    console.log("you Looser");
  }
});

const field = document.querySelector(".fotball-div");
const ball = field.querySelector("img");

field.style.position = "relative";
ball.style.position = "absolute";
ball.style.transition = "0.1s linear";

field.addEventListener("mousemove", (event) => {
  const fieldRect = field.getBoundingClientRect();

  const x = event.clientX - fieldRect.left;
  const y = event.clientY - fieldRect.top;

  const ballWidth = ball.offsetWidth;
  const ballHeight = ball.offsetHeight;

  let newX = x - ballWidth / 2;
  let newY = y - ballHeight / 2;

  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;
  if (newX > fieldRect.width - ballWidth) newX = fieldRect.width - ballWidth;
  if (newY > fieldRect.height - ballHeight)
    newY = fieldRect.height - ballHeight;

  ball.style.left = `${newX}px`;
  ball.style.top = `${newY}px`;
});
