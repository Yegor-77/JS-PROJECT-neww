const field = document.querySelector(".fotball-div");
const ball = field.querySelector("img");

field.addEventListener("mousemove", (e) => {
  const fieldRect = field.getBoundingClientRect();


  let x = e.clientX - fieldRect.left - ball.clientWidth / 2;
  let y = e.clientY - fieldRect.top - ball.clientHeight / 2;

  x = Math.max(0, Math.min(x, field.clientWidth - ball.clientWidth));
  y = Math.max(0, Math.min(y, field.clientHeight - ball.clientHeight));

  ball.style.position = "absolute";
  ball.style.left = x + "px";
  ball.style.top = y + "px";
});
