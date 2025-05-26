const btnAtacar = document.getElementById('btn-atacar');
const btnDefender = document.getElementById('btn-defender');
const btnCurar = document.getElementById('btn-curar');
const btnReiniciar = document.getElementById('btn-reiniciar');

const vidaGorilaSpan = document.getElementById('vida-gorila');
const humanosRestantesSpan = document.getElementById('humanos-restantes');
const ataquesFeitosSpan = document.getElementById('ataques-feitos');
const logBatalha = document.getElementById('log-batalha');
const grupoHumanos = document.getElementById('grupo-humanos');

const somAtaque = document.getElementById('som-ataque');
const somMorte = document.getElementById('som-morte');

let vidaGorila = 100;
let humanos = [];
let ataquesFeitos = 0;
let defendeu = false;

function salvarEstado() {
  const estado = {
    vidaGorila,
    humanosVivos: humanos.length,
    ataquesFeitos
  };
  localStorage.setItem('estadoBatalha', JSON.stringify(estado));
}

function carregarEstado() {
  const estadoJSON = localStorage.getItem('estadoBatalha');
  if (estadoJSON) {
    const estado = JSON.parse(estadoJSON);
    vidaGorila = estado.vidaGorila;
    ataquesFeitos = estado.ataquesFeitos;
    const humanosVivos = estado.humanosVivos;
    humanos = new Array(humanosVivos).fill(true);
  } else {
    reiniciarJogo();
  }
}

function reiniciarJogo() {
  vidaGorila = 100;
  ataquesFeitos = 0;
  humanos = new Array(100).fill(true);
  defendeu = false;
  atualizarInterface();
  logBatalha.innerHTML = '';
  habilitarBotoes(true);
  salvarEstado();
  renderizarHumanos();
}