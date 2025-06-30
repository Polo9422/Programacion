//Realiza una aplicación que solicite al usuario su nombre y apellido y lo muestre en pantalla.
let nombre = "Lucas";
let apellido = "Salvatori";
console.log("Tu nombre es", nombre, apellido); 

//Realiza una aplicación que le solicite al usuario su nombre y su edad y le muestre por pantalla el mensaje “Hola XX tu edad es XX” donde XX son los datos del usuario.
let edad = "25";
let nombre2 = "Juan";
console.log("Tu nombre es ", nombre2, "y tu edad es", edad);

//Realiza una aplicación que dados dos valores colocados en variables realice la suma de los mismos y los muestre por pantalla.
let num1 = 11;
let num2 = 6;
let suma = num1 + num2;
console.log("La suma es", suma);

//Realiza una calculadora con las operaciones básicas (suma, resta multiplicación y división). Los valores para las operaciones deben estar almacenados en variables previamente.
let num3 = 21;
let num4 = 7;
let suma2= num3 + num4;
let resta = num3 - num4;
let multiplicacion = num3*num4;
let division = num3/num4;
console.log("La suma es", suma2);
console.log("La resta es", resta);  
console.log("La multiplicacion es", multiplicacion);
console.log("La division es", division);

//Condiscionales
//Realiza una aplicación que solicite una edad al usuario e indique si es mayor a 18 años o menor.
let edad2 = 21;
if (edad2 >18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
};

//Realiza una aplicación que dado dos valores numéricos ingresados por el usuario, indique en pantalla cual es el mayor y cual es el menor.
let valor1 = 20;
let valor2 = 30;
if (valor1 >valor2) {
    console.log("El primer valor ingresado es mayor")
    console.log("El segundo valor ingresado es el menor")
} else {
    console.log("El segundo valor ingresado es el mayor")
    console.log("El primer valor ingresado es el menor")
}

//Realiza un diagrama de flujo que dado 3 números, muestre por pantalla cual es menor, cual
//es mayor y cual está entremedio de los otros dos. Dado el diagrama construido realiza un
//programa que materialice lo diseñado en el diagrama.

var num5= 25;
var num6 = 10;
var num7 = 15;

if (num5 > num6 && num5 > num7) {	
    console.log("num1 es mayor con: " , num5);
    if (num6 > num7) {
        console.log("num2 es el del medio con: " , num6);
        console.log("num3 es el menor con: " , num7);
    } 
    else {
        console.log("num3 es el del medio con: " , num7);
        console.log("num2 es el menor con: " , num6);
    }
} else if (num6 > num5) {
    console.log("num2 es mayor con: " + num6);
    if (num5 > num7) {
        console.log("num1 es el del medio con: " + num5);
        console.log("num3 es el menor con: " + num7);
    } else {
        console.log("num3 es el del medio con: " + num7);
        console.log("num1 es el menor con: " + num5);
    }
} else {
    console.log("num3 es mayor con: " + num7);
    if (num5 > num6) {
        console.log("num1 es el del medio con: " + num5);
        console.log("num2 es el menor con: " + num6);
    } else {
        console.log("num2 es el del medio con: " + num6);
        console.log("num1 es el menor con: " + num5);
    }
}


//Realiza un programa que dados 4 números almacenados en variables, calcule la suma y
//multiplicación de los mismos y muestre por pantalla un mensaje que indique si la suma da
//mayor a 30 y la multiplicación menor a 400 (deben darse las 2 condiciones
//simultáneamente) y otro mensaje en caso contrario.

let num8 = 3;
let num9 = 2;
let num10 = 1;
let num11 = 8;
let multiplicacion2 = num8*num9*num10*num11;
let suma3 = num8+num9+num10+num11;
if (suma3>30 && multiplicacion2<400){
    console.log("La suma es mayor a 30 y la multiplicacion es menor a 400")
} else {
    console.log("No es mayor a 30 y menor a 400 a la vez")
}

//Como modificarías el ejercicio anterior para que indique específicamente cual de las dos
//condiciones no se cumplieron (suma o multiplicación) o si no se cumplió ninguna
//  de las 2.

if (suma3>30 && multiplicacion2<400){
    console.log("Ambas se cumplen")
} else if (suma3>30 && multiplicacion>=400){
    console.log ("Se cumple solo la suma")
} else if (suma3<=30 && multiplicacion2<400){
    console.log("Se cumple solo la multipliacion")
} else if (suma3<=30 && multiplicacion2>=400){
    console.log("Ninguna se cumple")
}