/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */
const div = document.createElement("div");
document.body.appendChild(div);

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */
const div2 = document.querySelectorAll("div");
const p = document.createElement("p");
p.textContent = "parrafo con js";
div2[0].appendChild(p);

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */
for (let index = 0; index < 6; index++) {
  const p6 = document.createElement("p");
  div2[1].appendChild(p6);
}

/* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */
const pDin = document.createElement("p");
pDin.innerHTML = `
Soy dinámico
`;
document.body.appendChild(pDin);

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");
for (let i = 0; i < apps.length; i++) {
  const li = document.createElement("li");
  li.textContent = apps[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
const eliminar = document.querySelectorAll(".fn-remove-me");
eliminar.forEach((element) => {
  element.remove();
});

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
Recuerda que no solo puedes insertar elementos con .appendChild.
*/
const pInser = document.createElement("p");
pInser.textContent = "Voy en medio!";
div2[0].insertAdjacentElement("afterend", pInser);

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
.fn-insert-here */
const divInser = document.querySelectorAll(".fn-insert-here");
divInser.forEach((element) => {
  const pTexto = document.createElement("p");
  pTexto.textContent = "Voy dentro!";
  element.appendChild(pTexto);
});
