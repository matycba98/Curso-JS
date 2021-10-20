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
const mouse = new Productos(
  "Mouse",
  "$5000",
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
