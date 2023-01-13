/*Suma de 3  numeros con una funcion*/ 
function calculo1 (a , b, c){
  return a+b+c;
   console.log(resultado);
}
console.log("\nhola se hizo la suma con funciones");
let x = calculo1(1,2,3);
let y = calculo1(1,2,4);
console.log("El numero A es:"+x);//numero menor
console.log("El numero B es:"+y);//numero mayor

/*Conmapracion de 2 numeros*/
console.log("\nAhora compararemos estos 2 numeros");
let aux=0;
function Compara(a,b){
    if(a>b){
        aux=1;        
    }
    else if(a<b){
        aux=2;
    }
    else if(a==b){
        aux=0;
    }
    else{
        aux=3;
    }
    return aux;
}

let z=Compara(x,y);

switch(z){
    case 0:
        console.log("numero iguales");
        break;
    case 1:
        console.log("a es mayor que b");
        break;
    case 2:
        console.log("a es menor que b");
        break;
    case 3:
        console.log("Son numeros diferentes");
        break;
}

