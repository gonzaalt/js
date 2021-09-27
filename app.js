let num1= Number(prompt("ingrese un numero"));
let num2= Number(prompt("ingrese otro numero"));

let num3=calcular (num1,num2);
let num4=calcular (50,30);

alert (num3,num4);

let promedio1 = promedio(num2)
let promedio2= promedio(num4)

console.log(promedio1,promedio2);

function promedio (a){
    let promedio = a/2;
    return promedio;
}


function calcular (a,b){
    let resultado = a+b;
    return resultado;
}