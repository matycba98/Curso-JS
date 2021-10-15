let precio, total, cuotas, resultado;
function ingresarValores(){
    precio = parseInt(prompt('Buen dia, porfavor indique el precio del producto a calcular:'));
    cuotas = parseInt(prompt('Porfavor indique en numero de pagos:\n1 - (5% de descuento)\n3 - (Sin interés)\n6 - (Sin interés)\n12 - (10% de interés)'));
}
const calculoPrecio = () => {
    if(cuotas == 1){
        total = precio - (precio * 0.05);
    } else if(cuotas == 3){
        total = precio;
    } else if(cuotas == 6){
        total = precio;
    } else if(cuotas == 12){
        total = precio + (precio * 0.1);
    } else {
        alert('El número de pagos ingresado es inválido, intente nuevamente.');
        ingresarValores();
    }
}
function cuotasTotal(){
    ingresarValores();
    calculoPrecio();
    resultado = total / cuotas;
    if(cuotas > 1){
        alert('El total a pagar es: $' + total + ' en ' + cuotas + ' pagos de $' + resultado);
    } else {
        alert('El total en un pago es: $' + total);
    }
}
cuotasTotal();