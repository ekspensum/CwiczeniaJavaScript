var auto = {
    marka: "syrenka",
    moc: 40,
    szybkosc: 100,
    kolor: "biały",
    wypisz: function(){
        document.getElementById("auto1").innerHTML = this.marka+", "+this.kolor+", "+this.moc+" KM,"+this.szybkosc+" km/h";
    }
}

auto.wypisz();
auto.marka = "mercedes";
auto.wypisz2 = function() {
    document.getElementById("auto2").innerHTML = this.marka+", "+this.kolor+", "+this.moc+" KM,"+this.szybkosc+" km/h"+" drzwi: "+this.drzwi;
}
auto.drzwi = 4;
auto.wypisz2();
delete auto.drzwi;
auto.wypisz2();
console.log(auto.drzwi);

var osoba = new Object();
osoba.imie = "Adam";
osoba.nazwisko = "Nowak";
osoba.wiek = 50;
osoba.wypisz = function(){
    document.getElementById("osoba1").innerHTML = this.imie+" "+this.nazwisko+" "+wiek;
}
osoba.wypisz();
console.log(osoba);
