//1
let linea = "#"
for (let i =1; i <= 7; i++){
    console.log(linea);
        linea = linea + "#";
}

//2
let n = 1
for (let i =1; i <=50; i++){
    if (n % 3 === 0 && n % 5 === 0){
        console.log("FizzBuzz");
    } else if( n%3 === 0){
        console.log("Fizz");
    } else if ( n%5 === 0){
        console.log("Buzz");
    } else {console.log(n);}
    n = n + 1;
}

//2 Optimizado 
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//3

let resul = "";
let dim = 8
for (let i = 0; i < dim; i++) {
  for (let j =0; j < dim; j++){
    if ((i+j) %2 === 0){
      resul += " ";
    }else {
      resul += "#";
    }
  }
  resul += "\n";
}
console.log(resul);

