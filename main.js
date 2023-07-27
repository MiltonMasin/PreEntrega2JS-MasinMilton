// alert("Ingrese la opcion del producto que desea llevar, para terminar ingrese 0")

// let seleccionar = Number(prompt ("1- Buzos $14000, 2- Jeans $18000, 3- Camisas $8000"))
// let seleccionarCantidad
// let total = 0

// const cantidad = (cant,precio) => {
//     return cant*precio
// }


// while (seleccionar != 0){
//     switch (seleccionar){
//         case 1: 
//             seleccionarCantidadantidad = Number(prompt("Slecciono buzo, indique que cantidad")) 
//             total += cantidad (seleccionarCantidadantidad, 14000)
//             break;
//         case 2:
//             seleccionarCantidadantidad = Number(prompt("Slecciono jeans, indique que cantidad")) 
//             total += cantidad (seleccionarCantidadantidad, 18000)
//             break;
//         case 3:
//             seleccionarCantidadantidad = Number(prompt("Slecciono camisas, indique que cantidad")) 
//             total += cantidad (seleccionarCantidadantidad, 8000)
//             break;


//         default:
//         break;
//     }
//     seleccionar = Number(prompt ("1- Buzos $14000, 2- Jeans $18000, 3- Camisas $8000"))
// }


// alert ("El precio de la compra es de: " + total)



const Producto = function(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  };
  
  let prenda1 = new Producto("Buzo", 12000, 23);
  let prenda2 = new Producto("Buzo con frisa", 15500, 12);
  let prenda3 = new Producto("Jean", 20000, 18);
  let prenda4 = new Producto("Jean elastizado", 21500, 12);
  
  let prendas = [prenda1, prenda2, prenda3, prenda4];
  
  function filtrarPrendas() {
    let palabra = prompt("Ingrese la prenda deseada").trim().toUpperCase();
    let resultado = prendas.filter((producto) =>
      producto.nombre.toUpperCase().includes(palabra)
    );
  
    if (resultado.length > 0) {
      console.table(resultado);
    } else {
      alert("No se encontró resultado para la palabra: " + palabra);
    }
  }
  
  filtrarPrendas();
  
  let seleccionar = prompt("Seleccione qué tipo desea");
  let seleccionarCant;
  
  let total = 0;
  
  const cantidad = (cant, precio) => {
    return cant * precio;
  };
  
  // Buscar el producto en el array según el nombre ingresado y obtener su precio
  let productoSeleccionado = prendas.find(
    (producto) => producto.nombre.toLowerCase() === seleccionar.toLowerCase()
  );
  
  if (productoSeleccionado) {
    seleccionarCant = parseInt(prompt("Seleccione la cantidad deseada"));
    total += cantidad(seleccionarCant, productoSeleccionado.precio);
  } else {
    alert("Producto no encontrado en el catálogo.");
  }
  
  alert("El precio a pagar es: " + total);