// alert("amo a mi novia")
// console.log("hola")
// console.error("error")
// let X = 9
// const Y = 6
// let nombre = necapojaja
// let edad = 31
// console.log("bienvenido" + nombre + "edad" + edad)
// console.log(`bienvenute ${nombre} edad ${edad}`)
// let condicion = true
// let condicion2 = false 
// if (condicion) {
//     alert("Correcto!")
// }
// else if(condicion2) {
//     alert("Falso!")
// }
// else {
//     alert("Ninguna")
// } 
// const num1 = 15;
// if(num1 >= 18) {
//   alert("Pasa bro")  
// }
// else if(num1 > 60) {
//     alert("Viejo verde")
// }
// else{
//     alert("Afuera peque")
// }
//function saludar() {
 //   console.log("hola pedrin");
//}
//saludar()
//function saludar(nombre){
//console.log("hola " + nombre)
//}
//let nombredeusuario = prompt("Coloque su Nombre")

//function sumardosnumeros(Numero1 , Numero2){
  //  return Numero1 + Numero2
//}

//let restardosnumeros = (X,Y) =>{
  //  let total = X - Y
    //console.log(total)
//}
//restardosnumeros(10,5)
//console.log(sumardosnumeros(10,5))

//function saludar(nombre) {
  //  return `Hola ${nombre} como estas?`
//
//saludar(nombredeusuario)
//const preciototal = (precio, impuesto) => {
  //  let total = precio +(precio * impuesto)
//}
let contador = 1; //Inicio de variable contador = 1
let infinito = true;

while (contador <= 5){ // Condición -> contador menor o igual a 5
console.log("Hola");
contador++; // Incrementa en 1 -> contador = contador + 1
}

let usuario = "gus"
let contra = "123"
let intentos = 0;
do {
let usuarioPrompt = prompt("Ingrese su usuario");
let contraPrompt = prompt("Ingrese su contraseña")

if(usuarioPrompt == usuario && contraPrompt == contra) {
alert("adelante")
intentos = 4;
} else {
    intentos++;
    alert("ERROR vas " + intentos + " Intentos (EL MAXIMO ES 3)")
}
} while (intentos <= 3);