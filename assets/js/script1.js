/* Se crean 2 variables con valores ingresados por el usuario, y se convierten en números  */
let n1 = prompt("Ingrese un primer número mayor a 0: ");
n1 = parseInt(n1);
let n2 = prompt("Ingrese un segundo número mayor a 0, y distinto al primero: ");
n2 = parseInt(n2);

/* Se realizan las operaciones requeridas y se almacenan en variables nuevas */
let suma = n1 + n2;
let resta = n1 - n2;
let multiplicacion = n1 * n2;
let division = n1 / n2;
let modulo = n1 % n2;

/* Se muestran los resultados en el documento HTML */
document.write(`El resultado de la suma entre ${n1} y ${n2} es ${suma} <br>`);
document.write(`El resultado de la resta entre ${n1} y ${n2} es ${resta} <br>`);
document.write(
  `El resultado de la multiplicación entre ${n1} y ${n2} es ${multiplicacion} <br>`
);
document.write(
  `El resultado de la división entre ${n1} y ${n2} es ${division} <br>`
);
document.write(
  `El resultado del módulo entre ${n1} y ${n2} es ${modulo} <br><br>`
);
