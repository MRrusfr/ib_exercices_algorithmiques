/*Exercice 3:
Vous êtes développeur et vous devez créer un système de vérification des mots de passe. Le mot
de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, et un chiffre. Écrivez
un programme qui vérifie si un mot de passe donné respecte ces conditions*/


/*Variables password, message en String, isEightChar,isCapital, isSmall, isDigit en Boolean, m en Char
Debut
Ecrire "Entrez le password :"
Lir le password
isEightChar <- longeur de password >= 8
isCapital <- false
isSmall <- false
isDigit <- false
Pour chaque element de passord verifier:
    Si m est une majiscule Alors:
        isCapital <- true
    Sinon m est un chiffre Alors:
        isDigit <- true
    Sinon m est une minuscule Alors:
        isSmall <-true
    FinSi

message <- "";
errorChar <-"au moins 8 caractères";
errorCapital <- "au moins une majuscule";
errorSmall <- "au moins une minuscule";
errorDigit <- " au moins un chiffre";

Si (isEightChar = true) et (isCapital = true) et (isSmall = true) et (isDigit = true) Alors:
    Ecrire "Votre password est correcte"
Sinon Alors:
    Ecrire "Votre password doit contenir :"
FinSi

Si errorChar = false Alors:
    Ecrire "au moins 8 caractères"
FinSi
Si errorCapital = false Alors:
    Ecrire "au moins une majuscule"
FinSi
Si errorSmall = false
    Ecrire "au moins une minuscule"
FinSi
Si errorDigit = false Alors:
    Ecrire " au moins un chiffre"
FinSi
Fin

*/


let password = prompt("Entrez le password :");
let isEightChar = password.length >= 8;
let isCapital = false;
let isSmall = false;
let isDigit = false;

for (i = 0; i < password.length; i++) {
    let m = password.charCodeAt(i);
    if ((m >= 65) && (m <= 90)) {
        isCapital = true;
    } else if ((m >= 48) && (m <= 57)) {
        isDigit = true;
    }else if ((m >= 97) && (m <= 122)) {
        isSmall = true;

    }
}

let message = "";
let errorChar = "\n au moins 8 caractères";
let errorCapital = "\n au moins une majuscule";
let errorSmall = "\n au moins une minuscule";
let errorDigit = "\n au moins un chiffre";

if (isEightChar && isCapital && isDigit && isSmall) {
    console.log("Votre password est correcte");
} else {    
    console.log("Votre password doit contenir :");
}


if (isEightChar == false ) { 
    console.log(errorChar);
}
if (isCapital == false) {
    console.log(errorCapital);
}
if (isSmall == false) {
    console.log(errorSmall);
}
if (isDigit == false) {
    console.log(errorDigit);
}
