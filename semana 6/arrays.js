/*arrays*/
const array1=['David','Cruz','25','1997',hobies=["correr", "caminar","videojuegos"]];
console.log(array1);

console.log("nombre",array1[0]);
console.log("edad",array1[2]);
console.log("hobies",array1[4][1]);

console.log("\nDesestructuring");

const[nombre,apellido,edad,anio,hob]=array1;
console.log(nombre);
console.log(edad);
console.log(hob[1]);


