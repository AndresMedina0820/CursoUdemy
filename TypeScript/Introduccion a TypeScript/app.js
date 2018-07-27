// function saludar(nombre:string){ 
//     console.log("Hola "+ nombre.toUpperCase());
// }
// var wolverine = {
//     nombre: "Logan"
// };
// saludar(wolverine.nombre);
//==================Variables LET y CONST===================
// let mensaje = "Hola";
// if (true) {
//     let mensaje = "Adios";
// }
// console.log(mensaje);
//======================Tipos de datos====================
// let nombre:string = "andres";
// let numero:number = 12345;
// let booleano:boolean = true;
// let hoy:Date = new Date();
// hoy = new Date('2018-08-20');
// let cualquiera:any;
// cualquiera = "Hola";
// cualquiera = 123;
// cualquiera = true;
// cualquiera = Date;
//======================Template Literales del ES6====================
// let nombre:string = "Juan";
// let apellido:string = "Perez";
// let edad:number = 22;
// let saludo = 
// `Hola, 
// ${nombre} ${apellido} 
// (${ edad })`;
// let texto:string = "Steven";
// //console.log(saludo);
// console.log(texto);
//======================Funciones: Parámetros opcionales, obligatorios y por defecto====================
//Parametro obligatorio
// function activar(personaje:string){
//Parametro por defecto
//function activar(personaje:string, personaje2:string = "StarLord"){
// function activar(   personaje:string, 
//                     personaje2:string = "StarLord",
//                     momento?:string ){
//     let mensaje:string = `Mi personaje favorito es ${personaje2}`;
//     console.log(mensaje);
// }
//Cuando la funcion es por defecto no es obligatorio llenar el parametro activar
//activar("Iron Man");
//======================Destructuracion de objetos y arreglos====================
//Destructuracion de objetos
// let guardian = {
//     nombre: "Peter Quill",
//     clave: "Star Lord",
//     poder: "Semidios"
// }
// let {nombre, clave, poder } = guardian;
// console.log(nombre, clave, poder);
// //Destructuracion de arreglos
// let avengers:string[] = ["Bruce", "Tony", "Steve"];
// let [Hulk, Cap, IronMan] = avengers;
// console.log(Hulk, Cap, IronMan);
//======================Promesas====================
// let prom1 = new Promise( function( resolve, reject ){
//     setTimeout( () => {
//         console.log("Promesa Terminada");
//         // Termina bien
//         resolve();
//         // Termina mal
//         //reject()
//     }, 1500)
// })
// console.log("Paso 1");
// prom1.then( function(){
//     console.log("Ejecutar cuando se termine bien!");
// },
//     function(){
//         console.error("Ejecutar si todo sale mal");
//     }
// )
// console.log("Paso 2");
//======================Interfaces de TypeScript====================
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
var ciclope = {
    nombre: "Ciclope",
    poder: "RayosLaser"
};
enviarMision(ciclope);
