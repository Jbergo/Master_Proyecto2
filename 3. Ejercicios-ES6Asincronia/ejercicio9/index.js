/*
Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.
*/

const getPokemon = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await res.json();

  mostrarPokemon(data);
};

const mostrarPokemon = (data) => {
  const img = document.querySelector(".random-image");
  img.src = data.sprites.other.home.front_default;

  const description = document.createElement("p");
  description.textContent = `${data.id} - ${data.name}`;
  document.body.appendChild(description);
};

document.addEventListener("DOMContentLoaded", () => {
  const num = Math.floor(Math.random() * 151) + 1;
  getPokemon(num);
});
