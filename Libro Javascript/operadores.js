// Comentarios de una línea
/*
Cometario
en varias 
lienas
*/

// Declaracion de variable con var y asignacion de valor
var saludo = "Hola como estas?";
console.log(saludo);

var numero1 = 5;
var numero2 = 10;
var suma = numero1 + numero2;
console.log("La suma de " + numero1 + " y " + numero2 + " es " + suma);

var numero3 = "5";
var numero4 = "10";
var suma2 = numero3 + numero4;
console.log("La suma de " + numero3 + " y " + numero4 + " es " + suma2);

/* tipos de datos
 - cadenas de texto (String)
 - numericos (Number) -> (Integer, Float, Real)
 - Booleanos (True, False)

 - Arreglos
 - Objetos
 - Funciones
*/

var esMayorDeEdad = true; // convension de nombre de variables en camelCase
// var es_mayor_de_edad = false; // convension de nombre de variables en snake_case
// var es mayor de edad = false; // no se puede usar espacios en los nombres de las variables

// esmayormeedad no es igual a esMayorDeEdad

console.log("Es mayor de edad: " + esMayorDeEdad);

/* Tipos de operadores
 - Asignacion (=) 
 - Matematicos o Aritmeticos (+, -, *, /, %)
 - Incremento y Decremento (++, --)
 - Operadores logicos (Negacion, and(y) &&, or(o) ||)
 - Operadores de comparacion (>, <, ==, !=, >=, <=) (===, !==)
*/

var resta = numero1 - numero2;
console.log("La resta de " + numero1 + " y " + numero2 + " es " + resta);
var multiplicacion = numero1 * numero2;
console.log("La multiplicacion de " + numero1 + " y " + numero2 + " es " + multiplicacion);
var division = numero1 / numero2;
console.log("La division de " + numero1 + " y " + numero2 + " es " + division);
var modulo = numero2 % numero1;
console.log("El modulo de " + numero2 + " y " + numero1 + " es " + modulo);
/*
dividendo |____ divisor
  resto     cociente

  cociente = dividendo / divisor
  resto = dividendo % divisor
*/

var incremento = numero1++; // numero1 = numero1 + 1;
console.log("El incremento de " + numero1 + " es " + incremento);
var decremento = numero1--; // numero1 = numero1 - 1;
console.log("El decremento de " + numero1 + " es " + decremento);

// Condicionales
// if, else
if (numero1 > numero2) {
  console.log("El numero 1 es mayor que el numero 2");
} else{
  console.log("El numero 1 no es mayor que el numero 2");
}