/* Se crea una variables dato ingresado por el usuario */
let celcius = prompt("Ingrese Temperatura en grados Celsius: ");
celcius = parseFloat(celcius);

/* Se realizan las operaciones necesarias par transformar el dato a 2 nuevas variables */
let fahrenheit = celcius + 273.15;
let kelvin = celcius * (9 / 5) + 32;

/* Se muestran los resultados de las 2 nuevas variables en el documento HTML */
document.write(
  `La Temperatura ingresada en grados Celcius corresponde a ${fahrenheit} grados Fahrenheit <br>`
);
document.write(
  `La Temperatura ingresada en grados Celcius corresponde a ${kelvin} grados Kelvin <br><br>`
);
