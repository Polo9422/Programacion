//WHILE
let numero = 0;
while (numero <=12) {
    console.log(numero);
    numero = numero +2;
};

//Calcula y muestra el valor segun la base y el exponente que elijas 
var prompt = require('prompt-sync')();
let base = Number(prompt("Elije una base "));
let exponente = Number(prompt("Elije el exponente "));
let resultado =1;
let contador = 0;
while (contador < exponente) {
    resultado = resultado* base;
    contador = contador + 1;
}
console.log(resultado);

// DO

let tunombre;
do {
    tunombre = (prompt("¿Cuál es tu nombre? "));
} while (isNaN(tunombre) != true  );
console.log("Tu nombre es " + tunombre);

//Aplicado a tu caso con caracteres y números:
let tunombre1 = (prompt("¿Cuál es tu nombre? "));

let tieneNumero = false;

for (let i = 0; i < tunombre1.length; i++) {
    let caracter = tunombre1[i];
    // Detectar si caracter es número y no espacio
    if (!isNaN(caracter) && caracter !== ' ') {
        tieneNumero = true;
        break;
    }
};
if (tieneNumero = true){
      console.log("Tiene número");  // true (porque '3' es número)
} console.log("No contiene número");

//FOR
for (let numero =0; numero <=12; numero = numero +2){
    console.log(numero);
}

//Rompiendo un ciclo 
console.log("Break");
for (let actual = 20; ; actual = actual + 1) {
    if (actual % 7 ==0) {
        console.log(actual);
        break;
    }
};

//SWITCH-CASE
console.log("SWITCH-CASE");
switch (prompt("Como esta el clima? ")){
    case "lluvioso":
        console.log("Recuerda salir con un paraguas.");
            break;
    case "nublado":
        console.log("Ve afuera.");
    case "soleado":
        console.log("Vistete con poca ropa.");
            break;
        default:
            console.log("Tipo de clima no válido");  
};

console.log("Sitch en ciclo While para repreguntar")
let salir=false
while (!salir){
    switch (prompt("Como esta el clima? ")){
    case "lluvioso":
        console.log("Recuerda salir con un paraguas.");
            salir=true
            break ;
    case "nublado":
        console.log("Ve afuera.");
            salir=true;
            break;
    case "soleado":
        console.log("Vistete con poca ropa.");
            salir=true;
            break;
        default:
            console.log("Tipo de clima no válido");  
    };
};