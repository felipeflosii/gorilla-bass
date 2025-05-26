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