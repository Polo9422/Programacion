// 📘 PLANTILLA DE EJERCICIOS DE PRÁCTICA - JAVASCRIPT
// Ejercicios sin resolver, con pistas y secciones para estudiar lógica paso a paso

/* ------------------ 🧠 1. OPERADORES ------------------ */

// 📌 Ejercicio 1.1
// Mostrá en consola el resultado de sumar dos números
// Pista: usá el operador `+`
let e = 3
let w = 5
console.log( e + w);

// 📌 Ejercicio 1.2
// Calculá cuánto queda de 25 dividido 4
// Pista: usá el operador `%` (módulo)
 
console.log(25 % 4);

// 📌 Ejercicio 1.3
// Si tenés una edad, mostrá cuántos años tendrá esa persona en 10 años
// Pista: sumá 10 a la variable `edad`
let edad = 45
let años = 10
//console.log("La persona en 10 años tendra "+ (edad + años)); Otra forma de escribirlo entre comillas invertidas 
console.log(`La persona en 10 años tendrá ${edad + años}`); 


/* ------------------ 🔁 2. ARRAYS ------------------ */

// 📌 Ejercicio 2.1
// Creá un array con 3 colores y mostrá el primero en consola
// Pista: recordá que los índices empiezan en 0
let colores = ["Azul", "Rojo", "Amarillo"];
console.log(colores[0]); 

// 📌 Ejercicio 2.2
// Mostrá en consola el largo del array anterior
// Pista: usá `.length`
console.log(colores.length);

// 📌 Ejercicio 2.3
// Agregá un color nuevo al final del array
// Pista: usá `.push()`
colores.push("Violeta");
console.log(colores);


//✅ ¿Cómo insertar "Violeta" en la posición 2 y que el resto se desplace?/.splice(posición, cantidadAEliminar, nuevoElemento)

colores.splice(2, 0, "Violeta"); // En la posición 2, no borra nada, y agrega "Violeta"
console.log(colores); 

// Resultado: ["Azul", "Rojo", "Violeta", "Amarillo"]
/*🧪 Ejercicio – La bandeja del horno
Imaginá que tenés una bandeja de horno donde vas poniendo comidas para hornear, y después las vas sacando una por una cuando están listas.*/
let bandeja = ["pan", "pizza", "empanada"];
let cocidos = bandeja.pop();
console.log(bandeja);
console.log(cocidos);

/*🧠 ¿Para qué me sirve guardar el valor en una variable?
Tenerlo en ultimo te sirve si:
Necesitás mostrarlo al usuario.
Querés volver a usarlo más adelante.
Querés moverlo a otro array.
Querés usarlo como parte de una lógica.*/

//Mover de un array a otro:
let pila = ["A", "B", "C"];
let destino = [];
destino.push(pila.pop());

//Cuando termines de mover uno, podés hacer que el código siga hasta que la bandeja quede vacía.
 let productos = [" Aceite", " Jabón", " Perfume", " Fideos", "Arroz"];
 let productospagados = [];
 while (productos.length > 0){
    productospagados.push(productos.pop());
 }
 console.log("Los productos pagados son " + productospagados );
 //console.log("Los productos pagados son: " + productospagados.join(", "));

 //SHIFT: shift(), elimina el primer elemento para mantener el orden, desde lo primero agregado

/* ------------------ 🔂 3. RECORRER ARRAYS ------------------ */

// 📌 Ejercicio 3.1
// Recoré un array de frutas y mostralas en consola una por una
// Pista: usá un bucle `for`
let frutas= ["Manzana", "Naranja", "Banana", "Kiwi"]
for (i =0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// 📌 Ejercicio 3.2
// Mostrá solo las frutas que empiecen con la letra "m"
// Pista: usá `startsWith()` dentro del bucle
for (i =0; i < frutas.length; i++) {
    if (frutas[i].startsWith("M")){
        console.log(frutas[i]);
    }
}
// 📌 Ejercicio 3.3
// Contá cuántas frutas tienen más de 5 letras
// Pista: usá un contador y `length`
let n = [];
for (i = 0; i < frutas.length; i++){
    if (frutas[i].length > 5){
        n.push(frutas[i]);
    }
}
console.log(n);
console.log("La cantidad de frutas que tienen mas de 5 letras son: " + n.length);

/* ------------------ 🎲 4. BONUS: PATRONES Y LÓGICA ------------------ */

// 📌 Ejercicio 4.1
// Mostrá una secuencia del 1 al 16, todo en una sola línea
// Pista: concatená dentro del bucle
let linea = "";
for (i = 1; i <= 16; i++){
    linea += i + " ";
}
console.log(linea);

console.log("VARIANTE")
let lineaA = " ";
for (let i = 1; i <= 16; i++){
    lineaA += i + "\t";
    if (i % 4 === 0) {
    lineaA += "\n";
    } 
}console.log(lineaA)

// 📌 Ejercicio 4.2
// Agregá un salto de línea cada 4 números
// Pista: usá `\n` cuando el índice sea divisible por 4

let tabla = "";
for (let i = 1; i <= 24; i++){
    tabla += i + "\t";
    if (i % 6 === 0){
        tabla += "\n";
    }
} console.log(tabla);

// 📌 Ejercicio 4.3
// Mostrá una grilla de 8x8 donde se alternen los caracteres 1 y 2 por fila
// Primera fila: 12121212
// Segunda fila: 21212121
// Pista: fijate si la fila es par o impar y arrancá con un número distinto
 
// Bucle externo
/*for (let i = 0; i < 8; i++) {
  // Bucle interno
  for (let j = 0; j < 8; j++) {
    linea += i + j ;
    if (j % 8 === 0){
        linea += "\n";
    }
  }
}
console.log(linea);*/


let grilla = "";
let dim = 8;
for (let i = 0; i < dim; i++) {
  for (let j = 0; j < dim; j++) {
    if ((i + j) % 2 === 0) {
      grilla += "1\t";
    } else {
      grilla += "2\t";
    }
  }
  grilla += "\n"; // ← salto de línea después de completar la fila
}
console.log(grilla);

/* ------------------ FIN ------------------ */

// Cuando termines de resolver un ejercicio, podés agregarle tu solución debajo del comentario
// También podés probar escribir "tests" simples en consola para ver si funciona como esperás

// ¡Vamos paso a paso! 💪
