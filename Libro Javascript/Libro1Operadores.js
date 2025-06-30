//Rango 
function crearRangoFor(inicio, fin) {
  let rango = [];
  for (let i = inicio; i <= fin; i++) {
    rango.push(i);
  }
  return rango;
}

let rangoFor = crearRangoFor(1, 5);
console.log(rangoFor); // Salida: [1, 2, 3, 4, 5]

//Recorrer arreglos forEach

rangoFor.forEach(function(rangoFor) {
  console.log(rangoFor);
});


/*
Usá const cuando no necesites reasignar. Esto hace tu código más claro, seguro y predecible.
Usá let si sabés que el valor va a cambiar, como en contadores o acumuladores dentro de un bucle.*/

//El método .push() se usa para agregar uno o más elementos al final de un arreglo (array).
const frutas = ['manzana', 'banana'];
frutas.push('naranja');

console.log(frutas); // ['manzana', 'banana', 'naranja']

function factorial(numero) {
    if (numero == 0 ){
        return 1;
    }else {
        return factorial(numero -1) * numero;
    }
}

console.log(factorial(8));

//Otro ejemplo de funcion 
function contarHastaCero(numero) {
  if (numero === 0) {
    console.log("¡Llegamos a cero!");
  } else {
    console.log(numero);
    contarHastaCero(numero - 1); // la función se llama a sí misma
  }
}

contarHastaCero(3);

//Operador aritmetico % residuo o MODULO.
console.log("Modulo");
let residuo = 314 % 100;
console.log (residuo);

//Valores Strings
//Puedes usar comillas simples, comillas dobles, o comillas invertidas para representar strings,siempre y cuando las comillas al principio y al final coincidan. 
//La barra invertida seguido del n significa un salto de línea. \n

console.log("Esta es la primera linea\nY esta es la segunda");

//Si se quiere mostrar la barra invertida se precede de otra barra invertida y se mostrara la ultima.
console.log("\\");

//Operador + en Strings
console.log("con"+"cat"+"e"+"nar");

//Comillas invertidas
console.log(`la mitad de 100 es ${100/2}`);

//Operar unario 
console.log(typeof 8);
console.log(typeof "Strings")

//Operador Booleano
console.log(3>5);
//Comparar Strings
console.log("jaudsf"<"zoasdfas");

//Operador &&
console.log("Operador &&")
console.log(true&&false);

//Operador Or ||
console.log(false||true);

//Operador ternario, condicional. Si es true devuelve el valor de en medio, si el false devuevle el valor de la derecha
console.log("Operador ternario, condicional")
console.log(true?1:2);
console.log(false?1:2);

//Conversión de tipo automática 
//Cuando null o undefined ocurren en calquiera de los lados del operador, este produce verdadero solo si ambos lados son valores o null o undefined.
console.log(null == undefined);
console.log(null==0);

/*La reglas para para convertir strings y números booleanos, dice que 0, NaN, y el strings vació ("") cuentan como false, mientras que todos los otros valores cuentan como true.
*/
console.log("" === 0);
console.log(5!==0);

console.log ("Agnes" || "usuario");

//Capitulo 2
//Una sola declaracion let puede definir multiples vinculaciones. Las definiciones debne estar separadas por coma.

console.log("Una sola declaracion let puede definir multiples vinculaciones.");
let uno=1, dos=2;
console.log(uno + dos);

console.log("Funcion Math.max para saber el valor mas grande");
console.log(Math.max(5,6));

var prompt = require('prompt-sync')();
//FLUJO DE CONTROL. Cuando tu programa contiene mas de una declaración, las declaraciónes se ejecutan como si fueran una historia, de arriba a abajo.
console.log("Flujo de control");
let elNumero = Number(prompt("Elige un número "));
console.log("Tu número es la raíz cuadrada de " + elNumero * elNumero);

//EJECUCIÓN CONDICIONAL. 
let elNumero2= Number(prompt("Elige un número "));
console.log("EJECUCIÓN CONDICIONAL");
if (!Number.isNaN(elNumero2)) {
    console.log("Tu número es la raíz cuadrada de " + elNumero2 * elNumero2);
} else (console.log("Esto no es un número"));
//Alternativa sin funciones
console.log("EJECUCIÓN CONDICIONAL, alternativa sin funciones")
if (elNumero2 === elNumero2) { // comprobación alternativa a isNaN
    console.log("Tu número es la raíz cuadrada de " + elNumero2 * elNumero2);
} else (console.log("No es un número"));

let edad = Number("abc");  // Esto da NaN

let nm = 15
if (nm < 10) {
  console.log("Pequeño")
} else if (nm < 100) {
  console.log("Mediano")
} else {
  console.log("Grande")
}

