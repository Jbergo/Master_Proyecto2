/*
Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página.
*/
const select = document.querySelector("#character-list");
const img = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then((res) => res.json())
  .then((res) => {
    res.forEach((element) => {
      const option = document.createElement("option");
      option.textContent = element.fullName;
      option.value = element.imageUrl;

      select.appendChild(option);

      mostrarPersonaje;
    });
  });

const mostrarPersonaje = select.addEventListener("change", (e) => {
  const personajeId = e.target.value;
  console.log(personajeId);

  const img = document.querySelector(".character-image");
  img.src = personajeId;
});
