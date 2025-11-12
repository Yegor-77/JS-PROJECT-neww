const num1El = document.querySelector("#num1");
const num2El = document.querySelector("#num2");
const resultEl = document.querySelector("#result");
const buttons = document.querySelectorAll(".znak");
const equalBtn = document.querySelector("#equal");
let operator = "+";
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.textContent;
  });
});




equalBtn.addEventListener("click", () => {
  const a = parseFloat(num1El.value);
  const b = parseFloat(num2El.value);
  let res = 0;

  if (isNaN(a) || isNaN(b)) {
    resultEl.value = "Помилка";
    return;
  }







  switch (operator) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = b !== 0 ? a / b : "∞";
      break;
  }

  resultEl.value = res;
});
