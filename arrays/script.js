var hoeveelheid = 0;
var leerlingen = new Array();
var table = document.getElementById("main");
var totaleLeeftijd = 0;

function addStudents() {
    hoeveelheid = hoeveelheid + prompt("Hoeveel leerlingen wilt u toevoegen?", "1");
    if (hoeveelheid != NaN) {
        if (hoeveelheid >= 0) {
            for (let i = 0; i < hoeveelheid; i++) {
                let num = i + 1;
                let leerling = {
                    naam: prompt("Naam lln. " + num),
                    klas: prompt("Klas lln. " + num),
                    geslacht: getGeslacht(num),
                    geboortejaar: getYear(num)
                }
                leerlingen[i] = leerling;
            }
        }
    }
}

function generateTable() {
    table.innerHTML = "";
    table.innerHTML += ("<tr><td><b>Naam</b></td><td><b>Klas</b></td><td><b>Geslacht</b></td><td><b>Geboortejaar</b></td><td><b>Leeftijd</b></td></tr>");
    for (let i = 0; i < hoeveelheid; i++) {
        let leeftijd = (new Date().getFullYear()) - parseInt(leerlingen[i].geboortejaar);
        totaleLeeftijd = totaleLeeftijd + leeftijd;
        table.innerHTML += ("<tr><td>" + leerlingen[i].naam + "</td><td>" + leerlingen[i].klas + "</td><td>" + leerlingen[i].geslacht + "</td><td>" + leerlingen[i].geboortejaar + "</td><td>" + leeftijd + "</td></tr>");

        let gem = totaleLeeftijd / leerlingen.length;
        document.getElementById("text").innerHTML = ("Gemiddelde leeftijd: " + gem);
    }
}

function getYear(num) {
    let temp;
    let valid = false;
    let try1 = true;
    while (!valid) {
        if (try1) {
            try1 = false;
            temp = prompt("Geboortejaar lln. " + num);
        } else {
            temp = prompt(`Geboortejaar goed invullen aub`);
        }
        if (temp != NaN) {
            if (temp > 1900 && temp <= new Date().getFullYear()) {
                valid = true;
            }
        }
    }
    return temp
}

function getGeslacht(num) {
    let temp;
    let valid = false;
    let try1 = true;
    while (!valid) {
        if (try1) {
            try1 = false;
            temp = prompt("Geslacht lln. " + num);
        } else {
            temp = prompt(`Geslacht kan alleen "m", "v", of "a" zijn.`);
        }
        if (temp == "m" || temp == "v" || temp == "a") {
            valid = true;
        }
    }
    return temp
}