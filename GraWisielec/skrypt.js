var haslo = "Doświadczenie jest szkołą w której lekcje drogo kosztują";
haslo = haslo.toUpperCase();
var haslo1 = "";
var literyPoprawne = [];
var licznikSzubienica = 0;
var indexSzubienica = 0;
var startPoprawne = 0;

function wypisz_haslo() {
    haslo1 = "";
    znakPauzy = 0;
    for (let i = 0; i < haslo.length; i++) {
        if (haslo.charAt(i) == " ")
            haslo1 += " ";
        else if (literyPoprawne.length > 0) {
            for (let j = 0; j < literyPoprawne.length; j++) {
                if (haslo.charAt(i) == literyPoprawne[j]) {
                    haslo1 += literyPoprawne[j];
                    znakPauzy = 0;
                    break;
                } else
                    znakPauzy++;
            }
            if (znakPauzy > 0)
                haslo1 += "-";
        } else
            haslo1 += "-";
    }
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;
const litery = ["A", "Ą", "B", "Ć", "C", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "R", "Q", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];

function start() {
    let tresc_diva = "";
    let aktualnaPoprawna1 = "";
    let aktualnaPoprawna2 = "";
    for (let i = 0; i < 35; i++) {

        if (i % 7 == 0) {
            if (literyPoprawne.length > 0) {
                for (let j = 0; j < literyPoprawne.length; j++) {
                    if (litery[i] == literyPoprawne[j]) {
                        tresc_diva += '<div class="litera" id="lit' + i + '" style="clear:both;background-color:blue;" onclick="ustawLitere(' + i + ')">' + litery[i] + '</div>';
                        aktualnaPoprawna1 = literyPoprawne[j];
                        break;
                    }
                }
                if (litery[i] != aktualnaPoprawna1)
                    tresc_diva += '<div class="litera" id="lit' + i + '" style="clear:both" onclick="ustawLitere(' + i + ')">' + litery[i] + '</div>';
            } else
                tresc_diva += '<div class="litera" id="lit' + i + '" style="clear:both" onclick="ustawLitere(' + i + ')">' + litery[i] + '</div>';
        } else {
            if (literyPoprawne.length > 0) {
                for (let j = 0; j < literyPoprawne.length; j++) {
                    if (litery[i] == literyPoprawne[j]) {
                        tresc_diva += '<div class="litera" id="lit' + i + '" style="background-color:blue;" onclick="ustawLitere(' + i + ')">' + litery[i] + '</div>';
                        aktualnaPoprawna2 = literyPoprawne[j];
                        break;
                    }
                }
                if (litery[i] != aktualnaPoprawna2)
                    tresc_diva += '<div class="litera" id="lit' + i + '" onclick="ustawLitere(' + i + ')">' + litery[i] + '</div>';
            } else
                tresc_diva += '<div class="litera" id="lit' + i + '" onclick="ustawLitere(' + i + ')">' + litery[i] + '</div>';
        }
    }
    document.getElementById("alfabet").innerHTML = tresc_diva;

    wypisz_haslo();
}

function ustawLitere(lit) {

    if (indexSzubienica == 9) {
        alert("Przegrłeś! Game Over");
        return;
    }
    if (!haslo1.includes("-")) {
        alert("WYGRAŁEŚ! Game Over");
        return;
    }
    let jestPoprawna = 0;
    for (let i = 0; i < haslo.length; i++) {
        if (haslo.charAt(i) == litery[lit]) {
            if (literyPoprawne.length > 0) {
                for (let j = 0; j < literyPoprawne.length; j++) {
                    if (literyPoprawne[j] == litery[lit]) {
                        jestPoprawna++;
                        licznikSzubienica = 0;
                        break;
                    }
                }
                if (jestPoprawna == 0) {
                    literyPoprawne.push(litery[lit]);
                    wypisz_haslo();
                    licznikSzubienica = 0;
                    break;
                }
            } else {
                literyPoprawne.push(litery[lit]);
                licznikSzubienica = 0;
                wypisz_haslo();
                break;
            }
        } else if (jestPoprawna > 0) {
            licznikSzubienica = 0;
            wypisz_haslo();
            break;
        } else
            licznikSzubienica++;
    }
    if (licznikSzubienica > 0) {
        indexSzubienica++;
        document.getElementById("szubienica").innerHTML = '<img src="img/s' + indexSzubienica + '.jpg" />';
        if (indexSzubienica == 9) {
            alert("Przegrłeś! Game Over");
            return;
        }
    }
    start();
    if (!haslo1.includes("-")) {
        alert("WYGRAŁEŚ! Game Over");
        return;
    }
    //console.log("Licznik plansza końcowy " + licznikSzubienica);
    //console.log(litery[lit]);
}