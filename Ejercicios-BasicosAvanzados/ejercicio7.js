/*
EJERCICIO 7
Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
*/

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne + " es mayor que " + numberTwo);
  } else if (numberOne < numberTwo) {
    console.log(numberOne + " es menor que " + numberTwo);
  } else {
    console.log(numberOne + " es igual que " + numberTwo);
  }
}

greaterNumber(7, 5);
