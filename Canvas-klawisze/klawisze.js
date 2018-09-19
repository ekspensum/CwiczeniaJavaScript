var can = document.createElement("canvas");
can.setAttribute("id", "can");
can.width = 800;
can.height = 800;

document.body.appendChild(can);

var ob = can.getContext("2d");
document.getElementById("can").addEventListener("keypress", onPushKey);
document.onkeydown = onPushKey;
ob.strokeRect(0, 0, 800, 800);


var x = 100;
var y = 100;
ob.fillRect(x, y, 30, 30);

function onPushKey(event) {
    let k = event.key;
    if (k == "ArrowRight") {
        ob.fillStyle = "#a91818";
        x = x + 20;
        ob.fillRect(x, y, 30, 30);
        ob.clearRect(x - 30, y, 30, 30);
    }
    if (k == "ArrowLeft") {
        ob.fillStyle = "#0d259c";
        x = x - 20;
        ob.fillRect(x, y, 30, 30);
        ob.clearRect(x + 30, y, 30, 30);
    }
    if (k == "ArrowDown") {
        ob.fillStyle = "#fad514";
        y = y + 20;
        ob.fillRect(x, y, 30, 30);
        ob.clearRect(x, y - 30, 30, 30);
    }
    if (k == "ArrowUp") {
        ob.fillStyle = "#52682d";
        y = y - 20;
        ob.fillRect(x, y, 30, 30);
        ob.clearRect(x, y + 30, 30, 30);
    }
    console.log("działa " + k);
}

document.getElementById("in1").addEventListener("keypress", jakiKlawisz);

function jakiKlawisz(event) {
    let k = event.key;
    console.log(k);
}