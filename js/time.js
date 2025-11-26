const timecalcInput = document.getElementById("timecalc-input");
const timecalcBtn = document.getElementById("timecalc-btn");
const timecalcResult = document.getElementById("timecalc-result");

timecalcBtn.addEventListener("click", () => {
  const value = Number(timecalcInput.value.trim());
  const hours = Math.floor(value / 60);
  const minutes = value % 60;

  timecalcResult.textContent = `${hours} : ${minutes}`;
});
