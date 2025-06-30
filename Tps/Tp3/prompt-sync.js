var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('Poneme algo bonito ');

console.log('Escribiste', n );


var numero = prompt ('Poneme un numero ');

console.log("Me pusiste el numero: ", numero);
console.log("El tipo de dato es: ", typeof numero);
console.log("El tipo e dato es: ", typeof parseInt (numero));
console.log("El tipo de dato es: ", typeof Number (numero));

let numero2 = Number (numero);
let n2 = 25;
//let n3 = typeof Number (n2);
let suma =  numero2 + n2;
console.log("El resultado es ", suma);
