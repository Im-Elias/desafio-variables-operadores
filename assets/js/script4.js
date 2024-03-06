/* Se crean 5 variables ingresadas por el usuario */
let n1 = prompt("Ingrese primer Número: ");
n1 = parseInt(n1);
let n2 = prompt("Ingrese segundo Número: ");
n2 = parseInt(n2);
let n3 = prompt("Ingrese tercer Número: ");
n3 = parseInt(n3);
let n4 = prompt("Ingrese cuarto Número: ");
n4 = parseInt(n4);
let n5 = prompt("Ingrese quinto Número: ");
n5 = parseInt(n5);

/* Se realizan las operaciones requeridas */
let suma = n1 + n2 + n3 + n4 + n5;
let promedio = (n1 + n2 + n3 + n4 + n5) / 5;

/* Se muestra el resultado */
document.write(
  `La suma de los cinco números es ${suma} y el promedio es ${promedio}`
);
