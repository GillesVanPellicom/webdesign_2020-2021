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
    //reset
    table.innerHTML = "";
    totaleLeeftijd = 0;
    aantealMinderjarigen = 0;

    table.innerHTML += ("<tr><td><b>Naam</b></td><td><b>Klas</b></td><td><b>Geslacht</b></td><td><b>Geboortejaar</b></td><td><b>Leeftijd</b></td></tr>");
    for (let i = 0; i < hoeveelheid; i++) {
        let leeftijd = (new Date().getFullYear()) - parseInt(leerlingen[i].geboortejaar);
        totaleLeeftijd = totaleLeeftijd + leeftijd;
        table.innerHTML += ("<tr><td>" + leerlingen[i].naam + "</td><td>" + leerlingen[i].klas + "</td><td>" + leerlingen[i].geslacht + "</td><td>" + leerlingen[i].geboortejaar + "</td><td>" + leeftijd + "</td></tr>");

        if (leerlingen[i].leeftijd < 18) {
            aantealMinderjarigen++;
        }
    }
    let gem = totaleLeeftijd / leerlingen.length;
    document.getElementById("text").innerHTML += ("Totale leeftijd: " + totaleLeeftijd + "<br>");
    document.getElementById("text").innerHTML += ("Gemiddelde leeftijd: " + gem + "<br>");
    document.getElementById("text").innerHTML += ("Aantal minderjarigen: " + aantealMinderjarigen + "<br>");
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

function handleForm() {
    let w1 = String(document.forms["form1"]["woord1"].value);
    let w2 = String(document.forms["form1"]["woord2"].value);
    let w1a = new Array();
    let w2a = new Array();

    for (let i = 0; i < w1.length; i++) {
        w1a[i] = w1.charAt(i);
    }
    for (let i = 0; i < w2.length; i++) {
        w2a[i] = w2.charAt(i);
    }

    if (w1 == w2) {
        for (let i = 0; i < w1.length; i++) {
            document.getElementById("text2").innerHTML += (w1[i]+"="+w2[i]+"<br>");
        }
    }
}