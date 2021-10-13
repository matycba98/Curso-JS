let numero1, numero2, resultado;
alert('Hola soy una mini calculadora para 2 números!');
let operacion = parseInt(prompt('Porfavor indica el número de la operacion que deseas realizar\n1: Suma - 2: Resta - 3: Multiplicación - 4: División'));
numero1 = parseFloat(prompt('Ingrese el 1er número:'));
numero2 = parseFloat(prompt('Ingrese el 2do número:'));
while(0 < operacion < 5){
    switch(operacion){
        case 1:
            resultado = numero1 + numero2;
            break;
        case 2:
            resultado = numero1 - numero2;
            break;
        case 3:
            resultado = numero1 * numero2;
            break;
        case 4:
            resultado = numero1 / numero2;
            break;
        }
        alert('El resultado es: ' + resultado);
        break;
    }