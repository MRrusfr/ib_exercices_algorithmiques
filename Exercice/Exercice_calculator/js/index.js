/******************* Calculator*****************/


/*Variables x, y, Somme des elementes array resultat en Entier, array en Entiers
Début
x <- 0
y <- 0
array <- null
Somme des elementes array <- 0
resultat <- 0

- function Addition
Lire x
Lire y
resultat <- x + y
Ecrire "resultat"

- function Soustraction
Lire x
Lire y
resultat <- x - y
Ecrire "resultat"

- function Multiplication
Lire x
Lire y
resultat <- x * y
Ecrire "resultat"

- function Division
Lire x
Lire y
resultat <- x / y
Ecrire "resultat"

- function Moyenne d'un ensemble de nombres
Lire array
resultat <-  Somme des elementes array / longeur de array
Ecrire "resultat"

- Calcul du pourcentage
Lire x
resultat <- x/100
Ecrire "resultat"
Fin
*/


let x = 0;
let y = 0;
let result = 0;
let tableOfValues = [];
let operator;
let resultDone = true;

function digitButtonCommon (x) {
    console.log(x);
	if(resultDone) {
		document.getElementById("result").value = x;
		resultDone = false;
	} else {
		document.getElementById("result").value = document.getElementById("result").value + x;
	}
}

let btnOne = document.getElementById('one');
btnOne.addEventListener("click", function digitButton () {
    digitButtonCommon(1);
});

let btnTwo = document.getElementById('two');

btnTwo.addEventListener("click", function digitButton () {
    digitButtonCommon(2);
});

let btnThree = document.getElementById('three');

btnThree.addEventListener("click", function digitButton () {
    digitButtonCommon(3);
});

let btnFour = document.getElementById('four');

btnFour.addEventListener("click", function digitButton () {
    digitButtonCommon(4);
});


let btnFive = document.getElementById('five');

btnFive.addEventListener("click", function digitButton () {
    digitButtonCommon(5);
});

let btnSix = document.getElementById('six');

btnSix.addEventListener("click", function digitButton () {
    digitButtonCommon(6);
});

let btnSeven = document.getElementById('seven');

btnSeven.addEventListener("click", function digitButton () {
    digitButtonCommon(7);
});

let btnEight = document.getElementById('eight');

btnEight.addEventListener("click", function digitButton () {
    digitButtonCommon(8);
});

let btnNine = document.getElementById('nine');

btnNine.addEventListener("click", function digitButton () {
    digitButtonCommon(9);
});

let btnZero = document.getElementById('zero');

btnZero.addEventListener("click", function digitButton () {
    digitButtonCommon(0);
});


document.getElementById('claerButton').addEventListener("click", function claerButton() { 
    document.getElementById("result").value = '';
    x = 0;
    y = 0;
    result = 0;
    tableOfValues = [];
	resultDone = true;
});

document.getElementById('addition').addEventListener("click", function addition() { 
    x = parseInt(document.getElementById("result").value);
    operator='+';
    tableOfValues.push(x);
	resultDone = true;
});
document.getElementById('soustraction').addEventListener("click", function soustraction() { 
    x = parseInt(document.getElementById("result").value);
    tableOfValues.push(x);
    operator='-';
	resultDone = true;
});
document.getElementById('multiplication').addEventListener("click", function multiplication() { 
    x = parseInt(document.getElementById("result").value);
    tableOfValues.push(x);
    operator='*';
	resultDone = true;
});
document.getElementById('division').addEventListener("click", function division() { 
    x = parseInt(document.getElementById("result").value);
    tableOfValues.push(x);
    operator='/'; 
	resultDone = true;
});
document.getElementById('moyenne').addEventListener("click", function moyenne() { 
    x = parseInt(document.getElementById("result").value);
    
    tableOfValues.push(x);    
    operator = "m"
	resultDone = true;
});
document.getElementById('pourcentage').addEventListener("click", function pourcentage() { 
    x = parseInt(document.getElementById("result").value);
	let txtPourcentage = x/100;
	console.log("mon porcentage est : ", txtPourcentage);
    document.getElementById("result").value = txtPourcentage;
	resultDone = true;
});

document.getElementById('equalButton').addEventListener("click", function equalButton() { 
    
    y = parseInt(document.getElementById("result").value);

    switch (operator) {
        case '+':      
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case 'm':
            tableOfValues.forEach((el) => result += el);
            result = (result/tableOfValues.length);
            document.getElementById("result").value = result;
            break;
    }

    document.getElementById("result").value = result;
	resultDone = true;
});

