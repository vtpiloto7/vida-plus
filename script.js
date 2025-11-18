let agua = 0;
let exercicio = 0;
let humorIndex = 0;
const humores = ["Feliz", "Neutro", "Cansado"];

function add(tipo) {
  if (tipo === "agua") agua++;
  if (tipo === "exercicio") exercicio += 5;

  document.getElementById(tipo).innerText =
    tipo === "agua" ? `${agua} copos` : `${exercicio} min`;
}

function toggleHumor() {
  humorIndex = (humorIndex + 1) % humores.length;
  document.getElementById("humor").innerText = humores[humorIndex];
}
