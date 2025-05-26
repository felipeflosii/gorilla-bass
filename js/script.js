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

function habilitarBotoes(valor) {
  btnAtacar.disabled = !valor;
  btnDefender.disabled = !valor;
  btnCurar.disabled = !valor;
}

function atualizarInterface() {
  vidaGorilaSpan.textContent = vidaGorila;
  humanosRestantesSpan.textContent = humanos.filter(h => h).length;
  ataquesFeitosSpan.textContent = ataquesFeitos;
}

function adicionarLog(mensagem) {
  const p = document.createElement('p');
  p.textContent = mensagem;
  logBatalha.appendChild(p);
  logBatalha.scrollTop = logBatalha.scrollHeight;
}

function renderizarHumanos() {
  grupoHumanos.innerHTML = '';
  humanos.forEach((vivo, index) => {
    if (vivo) {
      const img = document.createElement('img');
      img.src = 'assets/humano.png';
      img.alt = 'Humano';
      img.classList.add('humano-pequeno');
      grupoHumanos.appendChild(img);
    }
  });
}

function atacar() {
  if (humanos.filter(h => h).length === 0) {
    adicionarLog('Todos os humanos já foram derrotados!');
    return;
  }
  ataquesFeitos++;
  // Gorila ataca, mata de 1 a 5 humanos aleatórios
  let mortos = 0;
  const vivos = humanos.filter(h => h).length;
  const maxMortos = vivos < 5 ? vivos : 5;
  const mortes = Math.floor(Math.random() * maxMortos) + 1;
  for (let i = 0; i < mortes; i++) {
    // Mata o primeiro humano vivo encontrado
    const idx = humanos.findIndex(h => h === true);
    if (idx !== -1) {
      humanos[idx] = false;
      mortos++;
    }
  }
  adicionarLog(`Gorila atacou e matou ${mortos} humanos!`);
  somAtaque.currentTime = 0;
  somAtaque.play();
  renderizarHumanos();
}

 // Humanos atacam gorila se não defendeu
  if (!defendeu) {
    const dano = Math.floor(Math.random() * 10) + 5;
    vidaGorila -= dano;
    adicionarLog(`Humanos contra-atacam e tiram ${dano} de vida do gorila!`);
  } else {
    adicionarLog('Gorila se defendeu e recebeu menos dano!');
    const dano = Math.floor(Math.random() * 5) + 1;
    vidaGorila -= dano;
  }
  if (vidaGorila < 0) vidaGorila = 0;
  defendeu = false;
  atualizarInterface();
  salvarEstado();
  verificarFimDeJogo();

  function defender() {
  defendeu = true;
  ataquesFeitos++;
  adicionarLog('Gorila está se defendendo!');
  salvarEstado();
  atualizarInterface();
}

function curar() {
  if (vidaGorila >= 100) {
    adicionarLog('Gorila já está com vida máxima!');
    return;
  }
  vidaGorila += 15;
  if (vidaGorila > 100) vidaGorila = 100;
  ataquesFeitos++;
  adicionarLog('Gorila se curou 15 pontos de vida!');
  defendeu = false;
  salvarEstado();
  atualizarInterface();
}

function verificarFimDeJogo() {
  if (vidaGorila <= 0) {
    adicionarLog('💀 O gorila morreu! Fim de jogo!');
    somMorte.play();
    habilitarBotoes(false);
  } else if (humanos.filter(h => h).length === 0) {
    adicionarLog('🎉 Gorila venceu! Todos os humanos foram derrotados!');
    habilitarBotoes(false);
  }
}
  
btnAtacar.addEventListener('click', atacar);
btnDefender.addEventListener('click', defender);
btnCurar.addEventListener('click', curar);
btnReiniciar.addEventListener('click', reiniciarJogo);

// Carrega o estado salvo ou inicia jogo
window.onload = () => {
  carregarEstado();
  atualizarInterface();
  renderizarHumanos();
};
