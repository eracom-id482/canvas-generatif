var canvas = document.getElementById("myCanvas");
canvas.width = 1000;
canvas.height = 1000;
var ctx = canvas.getContext("2d");

var r1 = getRandom(0, 1000);
var r2 = getRandom(0, 1000);
var r3 = getRandom(0, 1000);
var r4 = getRandom(0, 1000);
var myTimer;

function randomize() {
  r1 = getRandom(0, 1000);
  r2 = getRandom(0, 1000);
  // r3 = getRandom(0, 1000);
  // r4 = getRandom(0, 1000);
}

// le code pour dessiner
function draw() {
  randomize();
  ctx.beginPath();
  ctx.moveTo(r1, r2);
  ctx.lineTo(r3, r4);
  ctx.stroke();
}

// Intercepter le clic
document
  .getElementById("myCanvas")
  .addEventListener("mousedown", function (event) {
    myTimer = setInterval(draw, 100);
    // r3 = event.clientX;
    // r4 = event.clientY;
  });

document.getElementById("myCanvas").addEventListener("mouseup", function () {
  // clearInterval(myTimer);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Fonction utilitaire
// pour produire des valeurs aléatoires
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
