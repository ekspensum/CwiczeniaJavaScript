var can = document.createElement("canvas");
can.setAttribute("id", "can");
can.width = 1000;
can.height = 700;
var areaAlien = can.width - 120;
document.body.appendChild(can);
var plansza = can.getContext("2d");
plansza.strokeRect(0, 0, can.width - 5, can.height - 5);

function Alien(x, y, i_val) {
    let ctx = can.getContext("2d");
    this.x = x;
    this.y = y;
    this.i_val = i_val;
    var img = new Image();
    img.src = "alien.png";
    img.onload = function() {
        ctx.drawImage(img, x, y, 80, 50);
    }
    this.moveAlienHor = function() {
        // zmienna i<=50% to ruch w prawo, else ruch w lewo
        let i = 0;
        setInterval(function() {
            i++;
            if (i <= areaAlien / 5 / 2) {
                x = x + 10;
                ctx.clearRect(x - 20, y, 80, 50);
                ctx.drawImage(img, x, y, 80, 50);
            } else {
                x = x - 10;
                ctx.clearRect(x + 20, y, 80, 50);
                ctx.drawImage(img, x, y, 80, 50);
            }
            if (i == areaAlien / 5)
                i = 0;
        }, i_val);
    }
    this.moveAlienDown = function() {
        setInterval(function() {
            if (y >= (can.height - 120)) {
                ctx.textAlign = "center";
                ctx.font = "35px Arial";
                ctx.fillStyle = "red";
                ctx.fillText("Game Over !", can.width / 2, 100);
                return;
            } else {
                if (y < can.height * 0.5) {
                    y = y + 10;
                    ctx.clearRect(x, y - 10, 80, 50);
                } else {
                    y = y + 20;
                    ctx.clearRect(x, y - 20, 80, 50);
                }
            }
        }, 300);
    }
}

function Player(x, y) {
    this.x = x;
    this.y = y;
    var tank = can.getContext("2d");
    var bullet = can.getContext("2d");
    var img = new Image();
    img.src = "tank.png";
    this.start = function() {
        img.onload = function() {
            tank.drawImage(img, x, y, 100, 75);
        }
    }
    this.moveTank = function(event) {
        let k = event.key;
        if (k == "ArrowRight") {
            x = x + 20;
            if (x <= can.width - 105) {
                tank.clearRect(x - 20, y, 100, 75);
                tank.drawImage(img, x, y, 100, 75);
            } else
                x = can.width - 105;
        }
        if (k == "ArrowLeft") {
            x = x - 20;
            if (x >= 5) {
                tank.clearRect(x + 20, y, 100, 75);
                tank.drawImage(img, x, y, 100, 75);
            } else
                x = 0;
        }
        let bulletInval;
        if (k == "Control") {
            console.log(k);
            let ballY = can.height - 120;
            let ballX = x + 50;
            bulletInval = setInterval(function() {
                ballY = ballY - 20;
                bullet.fillStyle = "red";
                bullet.beginPath();
                bullet.arc(ballX, ballY, 9, 0, 2 * Math.PI);
                bullet.clearRect(ballX - 10, ballY + 10, 20, 20);
                bullet.stroke();
                bullet.fill();
                if (ballY == 20) {
                    clearInterval(bulletInval);
                    bullet.clearRect(ballX - 10, ballY - 10, 20, 20);
                }
                console.log(ballY);
            }, 50)
        }
    }
}

// let ival = 3000;
// let y = 30;
// function moveAlienDown() {
//     y = y + 30;
//     ival = ival - 10;
//     console.log("ival: " + ival);
//     console.log("y: " + y);
//     setTimeout("moveAlienDown()", ival)
// }

var alien1 = new Alien(20, 50, 30);
var alien2 = new Alien(20, 100, 20);
var alien3 = new Alien(20, 150, 10);
alien1.moveAlienHor();
alien1.moveAlienDown();
alien2.moveAlienHor();
alien2.moveAlienDown();
alien3.moveAlienHor();
alien3.moveAlienDown();

var player = new Player(can.width / 2 - 50, can.height - 85);
player.start();
document.getElementById("can").addEventListener("keydown", player.moveTank);
document.onkeydown = player.moveTank;