let palavra = "amor";
let letras = {};
let isIsograma = true;

for (let letra of palavra) {
  if (letras[letra]) {
    isIsograma = false;
    break;
  }
  letras[letra] = true;
}

console.log(isIsograma ? "É isograma" : "Não é isograma");