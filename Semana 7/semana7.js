/*Actividad 1 */
let number = 10;
let edad = number;

edad >='18' ? (console.log("\n VÁLIDO \n ")):(console.log(" \n No VÁLIDO \n"));


/*Actividad 2
en mi eccomer tengo accesrios, articulos de higiine y ropa*/
const accesoriosGatos=[
    {id:"01a",color:"blanco",precio:200},
    {id:"02b",color:"rojo"  ,precio:300},
    {id:"02c",color:"verde" ,precio:400},
    {id:"02d",color:"azul"  ,precio:500},
];
for(let i =0 ; i<accesoriosGatos.length; i++ ){
    console.log(accesoriosGatos[i]);
}

/*Activcidad 3*/

const x = 18;
const aux = simula_caso(x);
function simula_caso(edad_cine){
    if(edad_cine>0 && edad_cine<12){
        edad_cine= 1;
    }
    else if(edad_cine>12 && edad_cine<18){
        edad_cine=2;
    }else if(edad_cine>=18 ) {
        edad_cine=3;
    } 
    return edad_cine;
}
switch(aux) {
    case 1:
        console.log("\n Eres menor de 12 anios tienes 50% de descuento en peliculas infantiles");
        break;
    
    case 2:
        console.log("\n Eres mayor de 12 anios y menor de 18 anios tienes 50% de descuento en peliculas clasificacion B");
        break;
    
    case 3:
        console.log("\n Eres mayor de 18 anios tiens el 50% de descuento en peliculas clasificacion C");
        break;
    
    default:
        console.log("\n NO vino nadie al cine");
        break;
}
