console.log("\n Creacion de Objeto");
const persona ={
    //clave : valor
    nombre : 'David',
    email:'dricardocj@gmail.com',
    pais: 'mexico',
    edad: 25,
    altura:1.70,
    sexo: 'M',   
    gustos:["videojuegos",15, "ejercicio",["correr","tocar guitarra"]],
    comer(){
        console.log("Toy comiendo");
    },
    dormir(){
        console.log("Toy durmueindo");
    }
}

console.log(persona);
console.log("\n Accediendo a cada una de las propiedades");
console.log(persona.edad);
console.log(persona.pais);
console.log(persona.nombre);

console.log("\nDesestructuración, imprimamos diferentes propiedades");
const{nombre}= persona;
console.log(nombre);
const{email}=persona;
console.log(email);
const{gustos}=persona;
console.log(gustos[3][1]);
