/*
Ejercicio 42
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante.
*/

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, i1, i2) {
  const text1 = array[i1];
  const text2 = array[i2];

  array[i1] = text2;
  array[i2] = text1;

  return array;
}

console.log(swap(fantasticFour, 0, 2));
