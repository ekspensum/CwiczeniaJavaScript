var can = document.createElement("canvas");
can.setAttribute("id", "can");
can.width = 1000;
can.height = 700;
var areaAlien = can.width - 120;
document.body.appendChild(can);
var plansza = can.getContext("2d");
plansza.strokeRect(0, 0, can.width - 5, can.height - 5);
var alienX = 0;

function Alien(x, y, i_val) {
    let ctx = can.getContext("2d");
    this.ax = 10;
    this.ay = 0;
    this.i_val = i_val;
    var img = new Image();
    img.src = "alien.png";
    img.onload = function() {
        ctx.drawImage(img, x, y, 80, 50);
    }
    this.alienX = function() {
        return x;
    }
    this.alienY = function() {
        return y;
    }
    this.moveAlienHor = function() {
        // zmienna i<=50% to ruch w prawo, else ruch w lewo
        let i = 0;
        setInterval(function() {
            i++;
            if (i <= areaAlien / 5 / 2) {
                if (y <= (can.height - 150)) {
                    x = x + 10;
                    ctx.clearRect(x - 20, y, 80, 50);
                    ctx.drawImage(img, x, y, 80, 50);
                } else
                    return;
            } else {
                if (y <= (can.height - 150)) {
                    x = x - 10;
                    ctx.clearRect(x + 20, y, 80, 50);
                    ctx.drawImage(img, x, y, 80, 50);
                } else
                    return;
            }
            if (i == areaAlien / 5)
                i = 0;
            this.alienX = x;
        }, i_val);

    }
    this.moveAlienDown = function() {
        setInterval(function() {
            if (y < can.height * 0.5) {
                if (y <= (can.height - 150)) {
                    y = y + 5;
                    ctx.clearRect(x, y - 5, 80, 50);
                    this.alienY = y;
                } else
                    return;
            } else {
                // obcy zwiększa skok 2x (tj. o 5px)
                if (y <= (can.height - 150)) {
                    y = y + 10;
                    ctx.clearRect(x, y - 10, 80, 50);
                    this.alienY = y;
                } else
                    return;
            }
        }, 1500);
    }
}
let counter = 0;

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
                tank.clearRect(x - 19, y, 100, 75);
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
        let bulletY = can.height - 150;
        let bulletX = x + 50;
        if (k == "Control") {
            if (counter == 0) {
                counter++;
                bulletInval = setInterval(function() {
                    bulletY = bulletY - 5;
                    bullet.fillStyle = "red";
                    bullet.beginPath();
                    bullet.clearRect(bulletX - 10, bulletY, 20, 20);
                    bullet.arc(bulletX, bulletY, 9, 0, 2 * Math.PI);
                    bullet.stroke();
                    bullet.fill();
                    col.contact(alien1.alienX(), alien1.alienY(), alien2.alienX(), alien2.alienY(), alien3.alienX(), alien3.alienY(), bulletX, bulletY);
                    if (bulletY <= 20) {
                        clearInterval(bulletInval);
                        bullet.clearRect(bulletX - 10, bulletY - 10, 20, 20);
                    }
                }, 10);
                setTimeout(function() {
                    counter = 0;
                }, 500);
            }
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

function Collision() {
    var al1 = 0;
    var al2 = 0;
    var al3 = 0;
    document.getElementById("al1").value = al1;
    document.getElementById("al2").value = al2;
    document.getElementById("al3").value = al3;
    document.getElementById("total").value = 0;
    this.contact = function(alien1X, alien1Y, alien2X, alien2Y, alien3X, alien3Y, bulletX, bulletY) {

        if (alien1Y == bulletY) {
            if (alien1X - 5 <= bulletX && bulletX <= alien1X + 85) {
                al1++;
                document.getElementById("al1").value = al1;
                document.getElementById("total").value = al1 + al2 + al3;
            }
        }
        if (alien2Y == bulletY) {
            if (alien2X - 5 <= bulletX && bulletX <= alien2X + 85) {
                al2 = al2 + 2;
                document.getElementById("al2").value = al2;
                document.getElementById("total").value = al1 + al2 + al3;
            }
        }
        if (alien3Y == bulletY) {
            if (alien3X - 5 <= bulletX && bulletX <= alien3X + 85) {
                al3 = al3 + 3;
                document.getElementById("al3").value = al3;
                document.getElementById("total").value = al1 + al2 + al3;
            }
        }
    }
}

var alien1 = null;
var alien2 = null;
var alien3 = null;
var player = null;
var col = null;

function startGame() {

    if (alien1 == null) {
        alien1 = new Alien(20, 25, 60);
        alien2 = new Alien(20, 75, 30);
        alien3 = new Alien(20, 125, 20);
        alien1.moveAlienHor();
        alien1.moveAlienDown();

        alien2.moveAlienDown();
        alien2.moveAlienHor();
        alien3.moveAlienHor();
        alien3.moveAlienDown();
        player = new Player(can.width / 2 - 50, can.height - 85);
        player.start();
        document.getElementById("can").addEventListener("keydown", player.moveTank);
        document.onkeydown = player.moveTank;
        col = new Collision();
        document.getElementById("buttonStart").innerHTML = "Zakończ grę";
    } else {
        document.location.reload();
    }
}