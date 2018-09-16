// JavaScript source code
function odlicz() {
    var dzisiaj = new Date();
    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth();
    if (miesiac < 10)
        miesiac = "0" + dzisiaj.getMonth();
    var rok = dzisiaj.getFullYear() + 1;
    var godzina = dzisiaj.getHours();
    if (godzina < 10)
        godzina = "0" + dzisiaj.getHours();
    var minuta = dzisiaj.getMinutes();
    if (minuta < 10)
        minuta = "0" + dzisiaj.getMinutes();
    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10)
        sekunda = "0" + dzisiaj.getSeconds();
    document.getElementById("zegar").innerHTML = dzien + "/" + miesiac + "/" + rok + "/" + " " + godzina + ":" + minuta + ":" + sekunda;
    setTimeout("odlicz()", 1000);
}

function pobierzLiczbe() {
    let liczba = document.getElementById("l1").value;
    if (liczba > 0)
        document.getElementById("l2").innerHTML = "liczba dodatnia";
    else if (liczba < 0)
        document.getElementById("l2").innerHTML = "liczba ujemna";
    else if (liczba == 0)
        document.getElementById("l2").innerHTML = "zero";
    else
        document.getElementById("l2").innerHTML = "to nie jest liczba";

}

function podajLiczby() {
    var start = new Number(document.getElementById("liczba1").value);
    var end = new Number(end = document.getElementById("liczba2").value);
    if (start < end) {
        var text = "";
        var j = start;
        while (j >= start && j <= end) {
            text += j + ", ";
            j++;
        }
        document.getElementById("zakres").innerHTML = text;
    } else if (start > end) {
        var tab = [];
        var j = 0;
        for (i = start; i >= end; i--) {
            tab[j] = " "+i;
            j++;
        }
        document.getElementById("zakres").innerHTML = tab.toString();
    } else if (parseInt(start) == parseInt(end)) {
        document.getElementById("zakres").innerHTML = "Obie liczby są sobie równe."
    } else
        document.getElementById("zakres").innerHTML = "Jedno z pól lub oba nie zawiera liczby."
}



