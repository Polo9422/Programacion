// Ejercicio 7
var num1= 25;
var num2 = 10;
var num3 = 15;

if (num1 > num2 && num1 > num3) {	
    console.log("num1 es mayor con: " , num1);
    if (num2 > num3) {
        console.log("num2 es el del medio con: " , num2);
        console.log("num3 es el menor con: " , num3);
    } 
    else {
        console.log("num3 es el del medio con: " , num3);
        console.log("num2 es el menor con: " , num2);
    }
} else if (num2 > num1) {
    console.log("num2 es mayor con: " + num2);
    if (num1 > num3) {
        console.log("num1 es el del medio con: " + num1);
        console.log("num3 es el menor con: " + num3);
    } else {
        console.log("num3 es el del medio con: " + num3);
        console.log("num1 es el menor con: " + num1);
    }
} else {
    console.log("num3 es mayor con: " + num3);
    if (num1 > num2) {
        console.log("num1 es el del medio con: " + num1);
        console.log("num2 es el menor con: " + num2);
    } else {
        console.log("num2 es el del medio con: " + num2);
        console.log("num1 es el menor con: " + num1);
    }
}
