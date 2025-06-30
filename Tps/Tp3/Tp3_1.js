// while (mientras)
// se ejecuta cuando la condicion se cumple (es verdadera), y se ejecuta con una
//  variable sino queda un bucle infinito


let cont = 0;
while (cont <10) {
    console.log ("El valor de cont es: " + cont)
    cont = cont + 5;
}

// for 
//primer termino declaro variable, segundo condicion, tercero incremento
for (let i=0; i<10; i= i+5) {
    console.log ("EL valor de i es: " + i);
}

//do while 
//a diferencia del while este se va a ejecutar aunque sea una vez

let cont3=0;
do{
    console.log ("El valor de cont3 es: " + cont3);
    cont3 = cont3 + 5;
}
while (cont3 <10);

