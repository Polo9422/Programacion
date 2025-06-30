/*Dado un entero n, mostrar por pantalla todos los enteros de 1 hasta n, pero en caso de que el
número sea múltiplo de 3 mostrar 'Fizz' en lugar del número, si es múltiplo de 5 mostrar 'Buzz'
y si es múltiplo de 3 y 5 mostrar 'FizzBuzz' en lugar del numero.*/

const prompt = require(`prompt-sync`)();

let pregunta,num;

pregunta = prompt("Cuantos años tienes?");
num = parseint(pregunta);

if (num > 20) {
    console.log("Usted es mayor de 20 años");

} else {
    console.log("Usted es menor de 20 años");
}