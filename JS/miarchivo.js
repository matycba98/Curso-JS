const productos = [];
let consulta1, consulta2;
class Productos {
  constructor(nombre, precio, cantidad, marca,) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.marca = marca;
    
  }
  presentacion() {
    alert(
      "Nombre del producto: " +
        this.nombre +
        " a un precio de " +
        this.precio +
        " con un stock de " +
        this.cantidad +
        ", de marca: " +
        this.marca);
  }
}
const teclado = new Productos(
  "Teclado",
   "10000",
   10,
    "Razer"
);

const mouse = new Productos(
  "Mouse",
  "5000",
  15,
  "Logitech"
);
const auricular = new Productos(
  "Auricular",
  "12500",
  10,
  "HyperX",
);
const monitor = new Productos(
  "Monitor",
  "30000",
  5,
  "BenQ",
);
productos.push(
  teclado,
  mouse,
  auricular,
  monitor,
);
console.log(productos);
function consultaF1() {
  while (1 <= consulta1 <= 4) {
    consulta1 = parseInt(
      prompt(
        "¿Que producto desea conocer?\n1: Teclado \n2: Mouse\n3: Auricular \n4: Monitor"
      )
    );
    break;
  }
  switch (consulta1) {
    case 1:
      teclado.presentacion();
      break;
    case 2:
      mouse.presentacion();
      break;
    case 3:
      auricular.presentacion();
      break;
    case 4:
      monitor.presentacion();
      break;
  }
  consulta2 = parseInt(
    prompt("¿Te gustaria saber sobre otros productos?\n1: Si\n2: No")
  );
  if (consulta2 == 1) {
    return consultaF1();
  } else {
    alert("¡Proximamente traeremos más información, hasta pronto!");
  }
}
/* consultaF1(); */

function consultaF1() {

  while (consulta2 !== 2) {
    consulta1 = parseInt(
      prompt(
        "¿Que producto desea conocer?\n1: Teclado \n2: Mouse\n3: Auricular \n4: Monitor"
      )
    );

    switch (consulta1) {
      case 1:
        teclado.presentacion();
        break;
      case 2:
        mouse.presentacion();
        break;
      case 3:
        auricular.presentacion();
        break;
      case 4:
        monitor.presentacion();
        break;
      default:
        alert("ingrese un nro valido");
    }

    consulta2 = parseInt(
      prompt("¿Te gustaria saber sobre otros productos?\n1: Si\n2: No")
    );

    if (consulta2 === 2) {
      alert("¡Proximamente traeremos más información, hasta pronto!");
    }
  }
}

const productosOrdenFund = productos.sort((fund1, fund2) =>{
  return fund1.precio - fund2.precio;
})
console.log('ordenado por precio: ',productosOrdenFund);

function inscripcion(){
    alert('Incripción de productos, a continuación se le pedirán datos de su producto');
    let newName = prompt('Ingrese nombre del producto');
    while(newName == '' || 30 < newName.length || newName.length < 5){
        newName = prompt('Ingrese nombre del producto nuevamente (Entre 5 y 30 caracteres)');
    }
    let newPrice = prompt('Ingrese el precio');
    while(newPrice == '' || 7 < newPrice.length || newPrice.length < 3){
        newPrice = prompt('Ingrese el precio nuevamente (Entre 3 y 7 caracteres)');
    }
    let newQuantity = prompt('Ingrese el stock');
    while(newQuantity == '' || 7 < newQuantity.length || newQuantity.length < 1){
        newQuantity = prompt('Ingrese el stock (Entre 1 y 7 caracteres)');
    }
    let newBrand = prompt('Ingrese la marca');
    while(newBrand == '' || 30 < newBrand.length || newBrand.length < 5){
        newBrand = prompt('Ingrese la marca nuevamente (Entre 5 y 30 caracteres)');
    }
    const newProductos = new Productos (newName, newPrice, newQuantity, newBrand);
    productos.push(newProductos);
    newProductos.presentacion();
}
/* inscripcion();
console.log(productos) */

let Bienvenida = document.getElementById("Bienvenida")
Bienvenida.innerHTML = "HOLA, BIENVENIDOS A SIMIL SHOP"
