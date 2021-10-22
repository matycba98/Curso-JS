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
   "$10000",
   10,
    "Razer"
);
productos.push(teclado);
const mouse = new Productos(
  "Mouse",
  "$5000",
  15,
  "Logitech"
);
productos.push(mouse);
const auricular = new Productos(
  "Auricular",
  "12500",
  10,
  "HyperX",
);
productos.push(auricular);
const monitor = new Productos(
  "Monitor",
  "30000",
  5,
  "BenQ",
);
productos.push(monitor);
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
consultaF1();

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
    let newPrecio = prompt('Ingrese el precio');
    while(newPrecio == '' || 7 < newPrecio.length || newPrecio.length < 3){
        newPrecio = prompt('Ingrese el precio nuevamente (Entre 3 y 7 caracteres)');
    }
    let newCantidad = prompt('Ingrese el stock');
    while(newCantidad == '' || 7 < newCantidad.length || newCantidad.length < 1){
        newCantidad = prompt('Ingrese el stock (Entre 1 y 7 caracteres)');
    }
    let newMarca = prompt('Ingrese la marca');
    while(newMarca == '' || 30 < newMarca.length || newMarca.length < 5){
        newMarca = prompt('Ingrese la marca nuevamente (Entre 5 y 30 caracteres)');
    }
    const newProductos = new Productos (newName, newPrecio, newCantidad, newMarca);
    productos.push(newProductos);
    newProductos.presentacion();
}
inscripcion();
console.log(productos)
