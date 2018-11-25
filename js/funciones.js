'use strict'
//Funciones
function calculadora(a, b, mostrar = false) {
    if (mostrar == false) {
        console.log("la suma de los dos numeros es: " + (a + b));
        console.log("la resta de los dos numeros es: " + (a - b));
        console.log("la multiplicacion de los dos numeros es: " + (a * b));
        console.log("la division de los dos numeros es: " + (a / b));
    } else {
        document.write("la suma de los dos numeros es: " + (a + b) + "<br/>");
        document.write("la resta de los dos numeros es: " + (a - b) + "<br/>");
        document.write("la multiplicacion de los dos numeros es: " + (a * b) + "<br/>");
        document.write("la division de los dos numeros es: " + (a / b) + "<br/>");
    }
};

calculadora(2, 3, true);