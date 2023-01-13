/*Comparacion de los nuemeors anteriores*/
let compara=(a,b)=>{
    if(a>b){
        console.log("A mayor que b");
    }
    else if(a<b){
        console.log("A menor que b");
    }
    else if(a==b){
        console.log("A igual b");
    }
    else{
        console.log("A diferentes b");
    }    
}

/*Funciones Arrow*/
let suma =(a,b,c)=> a+b+c;

let x=suma(1,2,4);
let y=suma(1,2,4);

console.log("\nVamos con ARROW a sumar 3 numeros y guardarlos en A y B")
console.log("La suma de 3 numero guardados en A es :"+x);
console.log("La suma de 3 nuemros guardados en B es :"+y);

console.log("\nAhora vamos comparar estos 2 valosres A Y B con una funcnion arrow")
compara(x,y);