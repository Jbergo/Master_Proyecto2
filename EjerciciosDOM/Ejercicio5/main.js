/*
Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.
*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const header = document.createElement("header");
header.innerHTML = `
<h1>Mejores Albums</h1>
<p>Mostrando una lista con los títulos creados dinámicamente a través de JS</p>
`;
document.body.appendChild(header);

const main = document.createElement("main");
const ul = document.createElement("ul");
document.body.appendChild(main);
main.appendChild(ul);

albums.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  ul.appendChild(li);
});

const footer = document.createElement("footer");
footer.textContent = "Ejercicios DOM - Katas en JS";
document.body.appendChild(footer);

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "style.css";

document.head.appendChild(link);
