var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// get CSS pixel size, prepare for retina
// var canvasRect = canvas.getBoundingClientRect();
var cSize = canvas.offsetWidth * 2;
canvas.width = cSize;
canvas.height = cSize;
var canvasX = canvas.offsetLeft;
var canvasY = canvas.offsetTop;

var r1 = getRandom(0, cSize);
var r2 = getRandom(0, cSize);
var r3 = getRandom(0, cSize);
var r4 = getRandom(0, cSize);
var myTimer;

function randomize() {
  r1 = getRandom(0, cSize);
  r2 = getRandom(0, cSize);
  // r3 = getRandom(0, 1000);
  // r4 = getRandom(0, 1000);
}

// le code pour dessiner
function draw() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  randomize();
  ctx.beginPath();
  ctx.moveTo(r1, r2);
  ctx.lineTo(r3, r4);
  ctx.lineWidth = 2;
  ctx.stroke();

}

// Intercepter le clic
document
  .getElementById("myCanvas")
  .addEventListener("mousedown", function (event) {
    myTimer = setInterval(draw, 200);
    // position du clic
    r3 = (event.clientX - canvasX) * 2;
    r4 = (event.clientY - canvasY) * 2;
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

// Télécharger

downloadLink.addEventListener('click', function() {
  var img = canvas.toDataURL('image/png');
  downloadLink.href = img;
});