'use strict'
//funciones anonimas
//es una funcion que no tiene nombre

var pelicula = function(nombre){
  return "La pelicula se llama "+nombre;
}

//CALLBACK

function sumame(a, b, sumaymuestra, sumapor2){

  let suma = a+b;
  sumaymuestra(suma);
  sumapor2(suma);
  return suma;
}

sumame(2, 4, (dato) => {
  console.log("La suma es ", dato);
},
(dato) => {
  console.log("La suma por 2 es ", (dato*2));
})
//funciones flecha =>
