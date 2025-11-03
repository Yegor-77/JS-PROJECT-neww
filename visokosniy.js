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

