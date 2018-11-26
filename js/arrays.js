'use strict'

var numeros = [1, 2, 3, 4, 5, 6, 7];

var lenguajes = new Array("Js", "Java", "Python", "C++", "C", "PHP", "C#", "R");

console.log(lenguajes);

console.log(lenguajes.length);

//var n = parseInt(prompt("Qué lenguaje te gusta?", 0));
//alert(lenguajes[n]);

document.write("<h1>Lenguajes de Programacion</h1>");

document.write("<ul>");
for(let i = 0; i < lenguajes.length; i++){
  document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");

//foreach

lenguajes.forEach((elemento)=>{
  document.write(elemento+" ");
});
