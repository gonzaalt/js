

solicitarDatos();



function solicitarDatos(){
    let num1 = Number (prompt("ingresa un numero"));
    let num2 = Number (prompt ("ingresa segundo numero"));
    let operador =prompt ("ingrese operacion a realizar");

    calcular(num1, num2, operador);
}

function calcular (a, b, c){
    
    let res;
    
    switch(c){
        case"+" : res = a + b;
        break;
        case"-" : res = a-b;
        break;
        case"*" : res =a * b;
        break;
        case"/" : res = a / b;
        break  ; 
        default: ("operacion invalida")
        break;

    }
       resultado(res)

}

function resultado(a){
    console.log(a)
    alert(a)
}



let num1 = Number(prompt("ingresa un numero"))

if(num1)

for(let i=0; i<= num1 ; i = i+2){
    console.log(i);
}

// objetos

function clientes(Nombre, Apellido, Direccion) {
    Nombre=Nombre;
    this.Apellido = Apellido ;
    this.Direccion  = Direccion;
}

let nombre = prompt ("nombre")
let apellido = prompt ("apellido")
let direccion = prompt ("direccion")

const gonzalo = new clientes (nombre, apellido, direccion)

console.log(gonzalo)