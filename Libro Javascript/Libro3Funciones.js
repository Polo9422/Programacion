//Definicion de función

const cuadrado = function(x) {
    return x * x;
};
console.log(cuadrado(12));

//Puede tener múltiples parámetros o ningún parámetro

const hacerSonido = function () {
    console.log("Pling!");
}; //Ningún parametro 

//Funciones de FLECHA
const potencia = (base, exponente) => {
    let resultado = 1;
    for (let cuenta = 0; cuenta<exponente; cuenta++){
        resultado *= base;
    }
    return resultado;
}
console.log(potencia(2,10));//Con parametros

/*Cuando solo haya un solo nombre de párametro, los paréntesis alrededor de la lista de parámetros pueden ser omitidos. 
Si el cuerpo es una sola expresión, en lugar de un bloque de llaves, esa expresión sera retornada por parte de la función. 
Asi que estas dos definiciones de cuadrado hacen la misma cosa:*/

const cuadrado1 = (x) => {return x*x;};
const cuadrado2 = x => x * x;
console.log(cuadrado1(2));
console.log(cuadrado2(3));

/*Este codigo causara error debido al exceso de llamadas, la pila de llamadas se quedara en bucle en la funcion y producira una falla
function gallina() {
    return huevo();
 }
function huevo() {
 return gallina();
 }
console.log(gallina() + " vino primero.");*/

//Argumentos opcionales 
function menos (a, b) {
    if (b=== undefined) return -a;
    else return a - b;
}
console.log(menos(10));
console.log(menos(10, 5));

//Si escribes un operador = después de un parámetro, seguido de una expresión, el valor de esa expresión reemplazara al argumento cuando este no sea dado. 

function potencia1 (base, exponente =2) {
    let resultado =1;
    for (let cuenta = 0; cuenta<exponente; cuenta++){
        resultado *= base ;
    }
    return resultado;
}
console.log(potencia1(4));
console.log(potencia1(2,6));

//RECURSIÓN
//Mirá esto como una pila (como una torre que se apila hacia arriba y se resuelve hacia abajo):
/*potencia2(2, 5)
= 2 * potencia2(2, 4)
= 2 * (2 * potencia2(2, 3))
= 2 * (2 * (2 * potencia2(2, 2)))
= 2 * (2 * (2 * (2 * potencia2(2, 1))))
= 2 * (2 * (2 * (2 * (2 * potencia2(2, 0)))))
= 2 * (2 * (2 * (2 * (2 * 1))))*/

function potencia2(base, exponente) {
    if (exponente == 0){
        return 1;
    } else {
        return base*potencia2(base, exponente -1);
    }
}

console.log(potencia2(2,5));

/*
✅ Resumen rápido que te puede servir para repasar:
Recursión: una función que se llama a sí misma.

Siempre necesita un caso base para no repetir infinitamente.

Pensalo como una cadena de llamadas que baja y luego se resuelve hacia arriba.

return base * potencia(base, exponente - 1) acumula el resultado multiplicando.
---------------------------------------------------------------------------------------*/

/* Comienza desde el actual 1 y el historial "1" en string. primero le + 5 pero como no es == a objetivo prueba 
con multiplicar por 3 y se queda con ese valor aunque no sea igual a objetivo, vuelve a + 5 y no es == objetivo,
asique multiplica por 3 y comprueba que es == a objetivo y return historial*/

function encontrarSolucion(objetivo) {
    function encontrar(actual, historia){
        if (actual == objetivo){
            return historia;
        }else if (actual >objetivo){
            return null;
        }else {
            return encontrar(actual+5, `(${historia}+ 5)`) ||
                    encontrar(actual*3, `(${historia} * 3 )`);
        }
    }
    return encontrar(1,"1");
}
console.log(encontrarSolucion(13));

//Funciones Crecientes
function imprimirInventarioGranja(vacas, pollos){
    let stringVaca= String(vacas);
    while (stringVaca.length <3){
        stringVaca= "0"+stringVaca;
    }
    console.log(`${stringVaca} Vacas`);
    let stringPollos = String(pollos);
    while (stringPollos.length <3){
        stringPollos= "0" + stringPollos;
    }
    console.log(`${stringPollos} Polllos`);
}
imprimirInventarioGranja(7,11);


//resultado *= base; ***ES IGUAL*** resultado = resultado * base;
 
/*let lanzarMisiles = function() {
    sistemaDeMisiles.lanzar("ahora");
 };
 if (modoSeguro) {
 lanzarMisiles = function() {
    console.log("Abortar misión")
 };
 }
const humus = function(factor) {
 const ingrediente = function(cantidad, unidad, nombre) {
 let cantidadIngrediente = cantidad * factor;
 if (cantidadIngrediente > 1) {
 unidad += "s";
 }
 console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
 };
 ingrediente(1, "lata", "garbanzos");
 ingrediente(0.25, "taza", "tahini");
 ingrediente(0.25, "taza", "jugo de limón");
 ingrediente(1, "clavo", "ajo");
 ingrediente(2, "cucharada", "aceite de oliva");
 ingrediente(0.5, "cucharadita", "comino");
 };
 */
