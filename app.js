let nombre = prompt ("tu nombre aqui")
let apellido = prompt("apellido")
let lenguaje = prompt ("lenguaje")

console.log(nombre)
console.log(apellido)
console.log(lenguaje)

console.log(nombre + " " + apellido )
console.log(`${nombre}  ${apellido}  ${lenguaje}`);

let cont = "gonzalo"

let pass = prompt ("ingrese su contraseña")
if (pass == cont){
    console.log ("contraseña correcta")
}
else {
    alert ("contraseña incorrecta")
}

let number = Number (prompt ("ingrese un numero"))

for(let i=0; i<=number; i=i+2){
    console.log(i)
}
