const scientists = [
  { name: "Albert", surname: "Einstein", birth: 1879, death: 1955 },
  { name: "Isaac", surname: "Newton", birth: 1643, death: 1727 },
  { name: "Marie", surname: "Curie", birth: 1867, death: 1934 },
  { name: "Galileo", surname: "Galilei", birth: 1564, death: 1642 },
  { name: "Nicolaus", surname: "Copernicus", birth: 1473, death: 1543 },
  { name: "Charles", surname: "Darwin", birth: 1809, death: 1882 },
  { name: "Ada", surname: "Lovelace", birth: 1815, death: 1852 },
  { name: "Michael", surname: "Faraday", birth: 1791, death: 1867 },
  { name: "Niels", surname: "Bohr", birth: 1885, death: 1962 },
  { name: "Carl", surname: "Gauss", birth: 1777, death: 1855 },
  { name: "Alexander", surname: "Fleming", birth: 1881, death: 1955 },
];

const pexesoArr = scientists
  .slice(0, 8)
  .flatMap((s) => [s.surname, s.surname])
  .sort(() => Math.random() - 0.5);

const pexeso = document.getElementById("pexeso");
let first = null;
let lock = false;

pexeso.innerHTML = pexesoArr
  .map((s, i) => `<div class="card" data-id="${i}" data-val="${s}"></div>`)
  .join("");

pexeso.onclick = (e) => {
  if (!e.target.classList.contains("card") || lock) return;
  const c = e.target;
  if (c.classList.contains("open") || c.classList.contains("matched")) return;

  c.classList.add("open");
  c.textContent = c.dataset.val;

  if (!first) {
    first = c;
  } else {
    lock = true;
    if (first.dataset.val === c.dataset.val) {
      first.classList.add("matched");
      c.classList.add("matched");
      first = null;
      lock = false;
    } else {
      setTimeout(() => {
        first.classList.remove("open");
        c.classList.remove("open");
        first.textContent = "";
        c.textContent = "";
        first = null;
        lock = false;
      }, 800);
    }
  }
};

const out = document.getElementById("output");

const tasks = {
  born19: () => scientists.filter((s) => s.birth >= 1801 && s.birth <= 1900),
  sumYears: () => scientists.reduce((a, s) => a + (s.death - s.birth), 0),
  sortAZ: () =>
    [...scientists].sort((a, b) => a.surname.localeCompare(b.surname)),
  sortYears: () =>
    [...scientists].sort((a, b) => a.death - a.birth - (b.death - b.birth)),
  delete151617: () =>
    scientists.filter((s) => s.birth < 1400 || s.birth > 1700),
  youngest: () => scientists.reduce((a, b) => (a.birth > b.birth ? a : b)),
  einsteinYear: () =>
    scientists.find((s) => s.name === "Albert" && s.surname === "Einstein")
      .birth,
  surnameC: () => scientists.filter((s) => s.surname.startsWith("C")),
  deleteA: () => scientists.filter((s) => !s.name.startsWith("A")),
  mostLeast: () => {
    const sorted = [...scientists].sort(
      (a, b) => b.death - b.birth - (a.death - a.birth)
    );
    return { most: sorted[0], least: sorted[sorted.length - 1] };
  },
  sameLetters: () =>
    scientists.filter(
      (s) => s.name[0].toLowerCase() === s.surname[0].toLowerCase()
    ),
  worked19: () => scientists.every((s) => s.birth >= 1801 && s.birth <= 1900),
};

document.querySelectorAll("button").forEach(
  (b) =>
    (b.onclick = () => {
      out.textContent = JSON.stringify(tasks[b.dataset.task](), null, 2);
    })
);
