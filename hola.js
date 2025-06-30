//console.log('Hola Juan')
var prompt = require('prompt-sync')();
let HaySol = prompt("Como esta el clima¿? ");
if (HaySol===true){
    console.log("VAMOS");
}else if (HaySol===false){
    console.log("No vamos :(");
}


/*function Saludar(){
    let nombres= "Juan";
    let quienesEstan=["Juan","Sere","Fran","Luciano","Alberto",];
    if (nombres===quienesEstan){
        return nombres;
    }
}
let hola= "Hola " + Saludar();
console.log(hola);*/

/*Solucion del chat, solo porque tengo tiempo
function Saludar() {
    let nombres = "Juan";
    let quienesEstan = ["Juan", "Sere", "Fran", "Luciano", "Alberto"];

    for (let i = 0; i < quienesEstan.length; i++) {
        if (quienesEstan[i] === nombres) {
            return nombres;  // Si lo encuentra, lo devuelve
        }
    }

    // Si no lo encuentra, devuelve otro texto
    return "desconocido";
}

let hola = "Hola " + Saludar();
console.log(hola);
*/