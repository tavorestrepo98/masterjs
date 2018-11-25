'use strict'
//Parametros Rest y Spread


function listadodefrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log('Fruta 1 ' + fruta1);
    console.log("Fruta 2 " + fruta2);
    console.log(resto_de_frutas);

};

listadodefrutas("manzana", "pera", "sandia", "guayaba", "melon");
var frutas = ["manzana", "pera"];
listadodefrutas(...frutas, "sandia", "guayaba", "melon");