let roughsvg = rough.svg(document.getElementById("svg"));
const svg = document.getElementById("svg");

// const test = roughsvg.rectangle(200, 200, 300, 300, {
//   fill: "white",
//   bowing: 6,
//   stroke: "purple",
//   strokeWidth: 3,
//   fillStyle: "solid",
// });
// test.addEventListener("click", () => {
//   console.log("klik kwadratu!");
// });
// svg.appendChild(test);

// const test1 = roughsvg.circle(800, 350, 300, {
//   fill: "white",
//   fillStyle: "solid",
// });
// test1.addEventListener("click", () => {
//   console.log("klik koła!");
// });
// svg.appendChild(test1);

var glob_y = 10;
var glob_x = 800;

//elipsa
const elipsa = roughsvg.ellipse(glob_x + 150, glob_y + 50, 300, 100, {
  fill: "pink",
  fillStyle: "solid",
});
elipsa.addEventListener("click", () => {
  console.log("klik elipsy!");
});
svg.appendChild(elipsa);

//linia
const linia = roughsvg.line(
  glob_x + 150,
  glob_y + 100,
  glob_x + 150,
  glob_y + 100 + 30
);
svg.appendChild(linia);
glob_y = glob_y + 130;

const buttonik = document.getElementById("button");
buttonik.addEventListener("click", () => {
  tworzenie(glob_x, glob_y);
});

//prostokąt
function tworzenie(x, y) {
  const prostokat = roughsvg.rectangle(x, y, 300, 100, {
    fill: "pink",
    fillStyle: "solid",
  });
  prostokat.addEventListener("click", () => {
    console.log("klik prostokąta!");
  });
  svg.appendChild(prostokat);

  //linia
  const line = roughsvg.line(
    glob_x + 150,
    glob_y + 100,
    glob_x + 150,
    glob_y + 100 + 30
  );
  svg.appendChild(line);
  glob_y = glob_y + 130;
}

const buttonik1 = document.getElementById("button1");
buttonik1.addEventListener("click", () => {
  diament(glob_x, glob_y);
});

function diament(x, y) {
  const romb = roughsvg.rectangle(
    glob_x + 150,
    glob_y + 100,
    100 / Math.sqrt(2),
    100 / Math.sqrt(2),
    {
      fill: "pink",
      fillStyle: "solid",
    }
  );
  romb.addEventListener("click", () => {
    console.log("klik romba!");
  });
  svg.appendChild(romb);
  glob_y = glob_y + 80;
}
