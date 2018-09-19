// Tutaj połozenie i wymiary Canvas sterowane są przez JavaScript
var can = document.createElement("canvas");
can.setAttribute("id", "can1");
can.width = 1000;
can.height = 800;
document.body.appendChild(can);
var linia = can.getContext("2d");
linia.moveTo(20, 50);
linia.lineTo(320, 300);
linia.stroke();
var napis = can.getContext("2d");
napis.font = "50px Arial";
// napis.fillText("Hello", 50, 50, 100);
napis.strokeText("Hello", 50, 50, 100);

var prost = can.getContext("2d");
prost.fillStyle = "#00c9a7";
prost.fillRect(600, 300, 300, 200);

prost.clearRect(700, 300, 100, 80);
prost.strokeRect(550, 200, 400, 400);


//Tutaj położenie i wymiary Canvas sterowane są przez CSS
var can2 = document.getElementById("can2");
var prost2 = can2.getContext("2d");
// prost.strokeRect(900, 400, 400, 400);
prost2.fillStyle = "#280d67";
prost2.fillRect(100, 50, 100, 50);