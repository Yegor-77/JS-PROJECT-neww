const teamMembers = document.querySelectorAll(".team-member");
const teamLeft = document.querySelector(".arrow.left");
const teamRight = document.querySelector(".arrow.right");
let teamIndex = 0;

function showTeamMember(idx) {
  teamMembers.forEach((mem, i) => {
    mem.classList.toggle("active", i === idx);
  });
}

teamLeft.addEventListener("click", () => {
  teamIndex = (teamIndex - 1 + teamMembers.length) % teamMembers.length;
  showTeamMember(teamIndex);
});

teamRight.addEventListener("click", () => {
  teamIndex = (teamIndex + 1) % teamMembers.length;
  showTeamMember(teamIndex);
});

showTeamMember(teamIndex);

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

function showSlide(idx) {
  slides.forEach((sl, i) => {
    sl.classList.toggle("active", i === idx);
    dots[i].classList.toggle("active", i === idx);
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const idx = parseInt(dot.getAttribute("data-index"));
    slideIndex = idx;
    showSlide(slideIndex);
  });
});

setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 5000);

showSlide(slideIndex);
