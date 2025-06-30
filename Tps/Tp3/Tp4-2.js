/*Realiza un script que dado un arreglo de caracteres, imprima por pantalla la cantidad de veces que aparece cada carácter en el arreglo. 
Ej: arreglo ['a', 'b', 'a', 'c', 'c', 'm', 'b', 'a'] debe imprimir 
a -> 3
b -> 2
c -> 2
m -> 1*/


let arreglo = ['a', 'b', 'c', 'a', 'b', 'a', 'd', 'c', 'c'];

let contador = [];

for (let i = 0; i < arreglo.length; i++) {
  let caracter = arreglo[i];
  if (contador[caracter]) {
    console.log(contador[caracter]++);
  } else {
    console.log(contador[caracter] = 1);
  }
}
