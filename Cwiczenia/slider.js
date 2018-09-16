// JavaScript source code

var numer = Math.ceil(Math.random() * 5);
var timer1 = 0;
var timer2 = 0;

function schowaj() {
    $("#slider").fadeOut(500);
}

function zmienSlajd() {

    numer++;
    if (numer == 6)
        numer = 1;
    var plik = "<img src=\"slajdy/slajd" + numer + ".png\" />";
    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(500);
    document.getElementById("nrSlajdu").innerHTML = numer;
    timer1 = setTimeout("zmienSlajd();", 3000);
    timer2 = setTimeout("schowaj();", 2500);
}

function odczytSlajdu(nr) {
    clearTimeout(timer1);
    clearTimeout(timer2);

    var plik = "<img src=\"slajdy/slajd" + nr + ".png\" />";
    document.getElementById("slider").innerHTML = plik;
    numer = nr-1;
    zmienSlajd();
 
    //location.reload(); 
    console.log(numer);
}

function readButton() {
    var but1 = document.getElementById("nrSlajdu").value;
    console.log(but1);
}

function odczytNrSlajdu() {
    console.log(numer);
}