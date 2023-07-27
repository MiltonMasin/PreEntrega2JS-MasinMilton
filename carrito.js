//PROGRAMA SIMULACION CARRITO DE COMPRAS

const Producto = function (nombre, precio, stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}

let producto1= new Producto("Buzo", 10000, 15)
let producto2= new Producto ("Buzo con Frisa", 18000, 10)
let producto3= new Producto("Jean", 13500, 13)
let producto4= new Producto("Jean elastizado", 18300, 21)


let lista = [producto1, producto2, producto3. producto4]
let carrito = []

function filtrarProd(){
    let buscador = prompt("Ingrese el producto que busca").trim().toUpperCase()
    let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(buscador))


    if(resultado.length>0){
        console.table(resultado)
    }else{
        alert("No se encuentra el producto buscado con la palabra: "+ buscador)
    }
}

filtrarProd()
