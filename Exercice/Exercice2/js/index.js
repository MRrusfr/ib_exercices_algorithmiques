
/*
Variables mot1, mot2, motMaj1, motMaj2 en chaine de caracteres
Début
Ecrire:"Entrez le mot 1 :"
Lire mot1
Ecrire:"Entrez le mot 2 :"
Lire mot2
parse mot1 to chaine de caracteres
parse mot2 to chaine de caracteres
convert dans un boucle char par char les mot et enregistrer les dans  motMaj1, motMaj2
comparer  motMaj1 et motMaj2
Si  motMaj1 = motMaj2 Alors:
    Ecrire "ils sont identiques"
Sinon Alors:
    Ecrire "ils sont identiques"
FinSi
Fin*/


// *************************** PAR MAP *************************************

let mot1 = prompt("Entrez le mot 1 :").split('');
let mot2 = prompt("Entrez le mot 2 :").split('');
let motMaj1 = [];
let motMaj2 = [];

var map = { 'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T', 'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z' }

for (let i = 0; i < mot1.length; i++) {
    motMaj1.push(map[mot1[i]]);
}
for (let i = 0; i < mot2.length; i++) {
    motMaj2.push(map[mot2[i]]);
    if (mot1.length != mot2.length) {
        console.log("Les mots sont different");
        break;
    } else if (motMaj1[i] != motMaj2[i]) {
                console.log("Les mots sont different");
                break;
    } else if ((i+1) != mot1.length) {
            continue;
    } else {
        console.log("Les mots sont identiques");
    }
}

// *************************** PAR ASCII TABLE *************************************

let mot1 = prompt("Entrez le mot 1 en minuscule:");
let mot2 = prompt("Entrez le mot 2 en minuscule:");
let motMaj1 = [];
let motMaj2 = [];


for (let i = 0; i < mot1.length; i++) {
    if ((mot1.charCodeAt(i) > 96) && (mot1.charCodeAt(i) < 123)) {
        motMaj1.push(String.fromCharCode(mot1.charCodeAt(i) - 32));
    } else {
        console.log("Le mot 1: Type de données incorrect!");
        break;
    }
}

for (let i = 0; i < mot2.length; i++) {
    if ((mot1.charCodeAt(i) > 96) && (mot1.charCodeAt(i) < 123)) {
        motMaj2.push(String.fromCharCode(mot2.charCodeAt(i) - 32));
    } else {
        console.log("Le mot 2:Type de données incorrect!");
        break;
    }
    if (mot1.length != mot2.length) {
        console.log("Les mots sont different");
        break;
    } else if (motMaj1[i] != motMaj2[i]) {
                console.log("Les mots sont different");
                break;
    } else if ((i+1) != mot1.length) {
            continue;
    } else {
        console.log("Les mots sont identiques");
    }
}
