

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


class Producto{
    constructor(nombre,precio){
            this.nombre =nombre;
            this.precio= precio;
    }

}

let listaRopa = [];

listaRopa.push(new Producto("camiseta",9000))
listaRopa.push(new Producto("short",5000))
listaRopa.push(new Producto("campera",10000))
listaRopa.push(new Producto("chaleco",4000))

//array

const agregarRopaALaLista = () => {

    let nombre= prompt ("Nombre del producto");
    let precio = Number (prompt ( "Precio del producto"));

    let producto = new Producto (nombre, precio)
    listaRopa.push(producto)


}

listaRopa.sort((a,b) => {
if (a.precio > b.precio){
    return -1
    }
if (a.precio < b.precio){
    return 1
}
return 0
})


console.log (listaRopa)

console.log(document)
console.log(document.body);


console.log(document.getElementById("unico"))

const monk = document.createElement ("h2")
monk.setAttribute ("id", "elementoAgregado")
monk.textContent = "Elemento nuevo"

document.getElementById ("aca").appendChild (monk)

console.log(monk)

const Datos = () => {

        console.log(document.getElementById ("nombre").value)
        console.log(document.getElementById ("categoria").value)
        console.log(document.getElementById ("precio").value)
        console.log(document.getElementById ("stock").value)

}
