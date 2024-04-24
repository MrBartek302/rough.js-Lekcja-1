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
  console.log(`X = ${glob_x}, Y = ${glob_y}`);
}

const buttonik1 = document.getElementById("button1");
buttonik1.addEventListener("click", () => {
  Drawdiamond(glob_x, glob_y);
});

function Drawdiamond(x, y) {
  a = 100 / Math.sqrt(2);
  d = 100;
  x = glob_x + 150 - a / 2;
  y = glob_y + (d / 2 - a / 2);

  const test = roughsvg.rectangle(x, y, a, a, {
    fill: "rgb(10,150,10)",
    fillWeight: 3,
  });

  test.setAttribute("transform", `rotate(45, ${x + a / 2}, ${y + a / 2})`);

  test.addEventListener("click", () => {
    console.log("click");
  });
  svg.appendChild(test);
  console.log(`Global X = ${glob_x}, Global Y = ${glob_y}`);

  const line = roughsvg.line(
    glob_x + 150,
    glob_y + 100,
    glob_x + 150,
    glob_y + 100 + 30
  );
  svg.appendChild(line);

  glob_y = glob_y + 130;
}
