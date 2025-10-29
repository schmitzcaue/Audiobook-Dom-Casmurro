const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const textoCapitulo = document.getElementById("capitulo");
const qtdCapitulos = 10;

let taTocando = false;
let capituloAtual = 1;
// console.log(botaoPlayPause);

function tocarFaixa() {
  // console.log("Clicou");
  audio.play("play-pause");
  taTocando = true;
  console.log("Deu play");
  botaoPlayPause.classList.remove("pausado");
  botaoPlayPause.classList.add("tocando");
}
function pausarFaixa() {
  // console.log("Clicou");
  audio.pause("play-pause");
  taTocando = false;
  console.log("Deu pause");

  botaoPlayPause.classList.remove("tocando");
  botaoPlayPause.classList.add("pausado");
}

function tocarOuPausar() {
  if (taTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function proximoCapitulo() {
  pausarFaixa();
  if (capituloAtual < qtdCapitulos) {
    capituloAtual = capituloAtual + 1;
  } else {
    capituloAtual = 1;
  }

  audio.src = "./audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capitulo" + capituloAtual;
}

function capituloAnterior() {
  console.log("hello");
  pausarFaixa();
  if (capituloAtual === 1) {
    capituloAtual = qtdCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }
  audio.src = "./audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capitulo" + capituloAtual;
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
