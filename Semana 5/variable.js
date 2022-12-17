//Crear una variable de cada tipo y hacerle un console.log a cada una en la terminal.
//por tipo de variable Global  Local e Inmutable e imprimimos en consola
var saludo = prompt("Hola este mi primer codigo JavaScript, saludame");
let nombres = prompt("Tu o tus nombres");
const apellido = prompt("Tus apellidos");
var edad_user = parseInt(prompt("Cuantos años tienes"));

console.log(saludo);
console.log(nombres);
console.log(apellido);
console.log(edad_user);

// por tipo de dato
//string
let nom1="David";
let nom2="Ricardo";
let apellido_1="Cruz";
let apellido_2="Juarez";
let mes_texto="Agosto"
//Number
let edad= 25;
let dia= 23;
let mes= 08;
let anio= 1997;
//Bolean
let flag1=true;
let flag2=false;
//Undifined
let indefinido = undefined;
//Null
let nulo = null;
//Imprimimos en consola cada elemento
console.log(nom1);
console.log(nom2);
console.log(apellido_1);
console.log(apellido_2);
console.log(mes_texto);
console.log(edad);
console.log(dia);
console.log(mes);
console.log(anio);
console.log(flag1);
console.log(flag2);
console.log(indefinido);
console.log(nulo);

//Crear 2 variables y concatenarlas con interpolación de texto.
//POR  CONCATENACION
var concatenar = alert("Ahora vamos a concatenar las variables, con las variables anteriores");
var concatenacion_1 = ('Bueno concatenando, yo me llamo '+ nom1+ ' ' +nom2+ ' ' +apellido_1+ ' ' +apellido_2+ ' y tengo ' +edad+ ' de edad, yo naci el '+dia+
                      ' de '+mes_texto+' de '+ anio);
    console.log(concatenacion_1);
    alert(concatenacion_1);
//POR INTERPOLACION
var concatenar = alert("Ahora vamos a concaternar con INTERPOLACION tus nombres");
var interpola= (`Bueno interpolando tu te llamas ${nombres} ${apellido} y tienes ${edad_user}`);
    console.log(interpola);
    alert(interpola);

/*Crear 2 variables tipo Number y realizar:
    1 Una operación aritmética.
   */
    
    let resta_edades= edad-edad_user;
    let suma = edad + edad_user;
    
    var imprime=(`la suma de denuestras edades es ${suma}`);
    console.log(imprime);
    alert(imprime);
//2 asignaciones + una operación aritmética.
    var verificaedad="Void";
// 1 Comparacion    
    if(resta_edades == 0){
        verificaedad="Somos de la misma edad";
        }
        else if(resta_edades <0){
            resta_edades = resta_edades *(-1)
            verificaedad="Eres mas grande que yo por ";
            }
            else{
                verificaedad="Soy mas grande que tu por ";    
            }

    verificaedad=(`${verificaedad} ${resta_edades} años`);
    console.log(verificaedad);
    alert(verificaedad);

    