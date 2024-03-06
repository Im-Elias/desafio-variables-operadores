/* Se crea una variable ingresada por el usuario y se convierte a un numero */
let dias = prompt("Ingrese una cantidad de días: ");
dias = parseInt(dias);

/* Se realizan operaciones para convertir los días ingresados en años y semanas, y se calcula los días otra restantes */
let ano = dias / 365;
let semana = (dias % 365) / 7;
dias = (dias % 365) % 7;

/* Se muestra el resultado en años/semanas/días */
document.write(
  `Los días ingresados corresponden a ${Math.floor(ano)} año(s), ${Math.floor(
    semana
  )} semana(s) y ${dias} día(s).`
);
