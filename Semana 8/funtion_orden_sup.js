/*En mi Eccomerce tengo 3 tipos de producto con 5 marcar cada 1 serain a 15 productos 
    Higiene
    Ropa 
    Accesorios
*/
let higiene = [
    { tipo: 'Jabon', marca: 'Hunter', stock: 8, precio: 50.50 },
    { tipo: 'Crema', marca: 'Go Care', stock: 9, precio: 80.60 },
    { tipo: 'Shampoo', marca: 'Consentido', stock: 10, precio: 200.73 },
    { tipo: 'Losion', marca: 'Fresh Pet', stock: 7, precio: 120.15 },
    { tipo: 'Acondicionador', marca: 'Espree', stock: 6, precio: 60.14 }
]

let ropa = [
    { tipo: 'Camisa', modelo: 'Playero', stock: 8, precio: 250.50 },
    { tipo: 'Playera', modelo: 'Urban', stock: 10, precio: 120.15 },
    { tipo: 'Abrigos', modelo: 'Invierno', stock: 9, precio: 300.51 },
    { tipo: 'Mascadas', modelo: 'Frances', stock: 5, precio: 50.50 },
    { tipo: 'Cosplay', modelo: 'Harry Potter', stock: 3, precio: 500.99 }
]

let accesorios = [
    { tipo: 'Codena', stock: 2, precio: 120.50 },
    { tipo: 'Lentes', stock: 5, precio: 250.45 },
    { tipo: 'Boinas', stock: 6, precio: 150.90 },
    { tipo: 'Gorras', stock: 8, precio: 199.99 },
    { tipo: 'Rascadera', stock: 4, precio: 1500.99 }
]
/*Imprimir en consola solo las marcas con sus stock.*/
console.log("Imprimir en consola solo las marcas con sus stock.");
const carrito = higiene.concat(accesorios, ropa)
console.log(carrito);




/* Imprimir en consola solo si alguno de los productos cuesta más de 200.*/
console.log("Imprimir en consola solo si alguno de los productos cuesta más de 200.");
console.log("Metodo 1");
let mayorQueDoscientos = carrito.filter(
    function (carrito) {
        return carrito.precio > 200.00;
    });
console.log(mayorQueDoscientos);

console.log("Metodo 2");
let mayorDoscientos = carrito.filter(item => item.precio > 200.00);
console.log(mayorDoscientos);




/*Imprime en consola el precio promedio de los productos.*/
console.log("Imprime en consola el precio promedio de los productos.");
let initialValue = 0;
const sumaCarrito = carrito.reduce((accumulator, currentValue) => accumulator + currentValue.precio, initialValue);
console.log("La suma de sus produtos asiende a : ", sumaCarrito);

const promedio = sumaCarrito / carrito.length;
console.log("El promedio de los productos es :", promedio);





/*Imprime en consola alfabéticamente el nombre de los productos.*/
console.log("Datos Ordenados Alfabeticamente : ");
const ordenAlfabetico = carrito.sort((item1, item2) => {
    if (item1.tipo == item2.tipo) {
        return 0;
    }
    else if (item1.tipo < item2.tipo) {
        return -1;
    } else {
        return 1;
    }
});

console.log(ordenAlfabetico);


/*Imprime en consola el producto más costoso, y redondea en un número entero*/
console.log("Imprime en consola el producto más costoso, y redondea en un número entero ");
const productoMasCaro = carrito.sort((item1, item2) => {
    if (item1.precio == item2.precio) {
        return 0;
    } else if (item1.precio < item2.precio) {
        return 1;
    } else {
        return -1;
    }
}
);

let guardaArray = productoMasCaro[0];
let aux = Math.round(guardaArray.precio);

console.log("El producto mas caro es :",productoMasCaro[0],"\n con precio redondeado de :", aux);
