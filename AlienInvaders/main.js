var can = document.createElement("canvas");
can.setAttribute("id", "can");
can.width = 1000;
can.height = 700;
document.body.appendChild(can);
var plansza = can.getContext("2d");
plansza.strokeRect(0, 0, can.width - 5, can.height - 5);

function Alien(x, y, i_val) {
    let ctx = can.getContext("2d");
    this.x = x;
    this.y = y;
    this.i_val = i_val;
    this.moveAlienHor = function() {
        let i = 0;
        setInterval(function() {
            i++;
            if (i <= can.width / 10 / 2) {
                x = x + 20;
                ctx.clearRect(x - 50, y, 50, 50);
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + 20, y + 20);
                ctx.lineTo(x, y + 30);
                ctx.lineTo(x - 20, y + 10);
                ctx.closePath();
                ctx.fill();
            } else {
                x = x - 20;
                ctx.clearRect(x + 10, y, 50, 50);
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + 20, y + 20);
                ctx.lineTo(x, y + 30);
                ctx.lineTo(x - 20, y + 10);
                ctx.closePath();
                ctx.fill();
            }
            if (i == can.width / 10)
                i = 0;
        }, i_val);
    }
    this.moveAlienDown = function() {
        itval = 3000;
        setInterval(function() {
            y = y + 60;
            console.log(itval);
        }, itval = itval - 1000);
    }
}

function Player(x, y) {
    this.x = x;
    this.y = y;
    var tank = can.getContext("2d");
    var img = new Image();
    img.src = "f18.jpg";
    this.start = function() {
        img.onload = function() {
            tank.drawImage(img, x, y, 60, 60);
        }
    }
    this.moveTank = function(event) {
        let k = event.key;
        if (k == "ArrowRight") {
            x = x + 20;
            tank.drawImage(img, x, y, 60, 60);
            tank.clearRect(x - 60, y, 60, 60);
        }
        if (k == "ArrowLeft") {
            x = x - 20;
            tank.drawImage(img, x, y, 60, 60);
            tank.clearRect(x + 60, y, 60, 60);
        }
        if (k == "Control") {
            console.log(k);
        }
    }
}

var alien1 = new Alien(0, 100, 30);
var alien2 = new Alien(0, 200, 20);
var alien3 = new Alien(0, 300, 10);
alien1.moveAlienHor();
alien1.moveAlienDown();
alien2.moveAlienHor();
alien2.moveAlienDown();
alien3.moveAlienHor();
alien3.moveAlienDown();

var player = new Player(can.width / 2, can.height - 70);
player.start();
document.getElementById("can").addEventListener("keydown", player.moveTank);
document.onkeydown = player.moveTank;