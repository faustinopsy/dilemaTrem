import Cenario from './componentes/Cenario.js';
import GameState from './componentes/GameState.js';
import Timer from './componentes/Timer.js';

const cenario = new Cenario('game-canvas', 1);
const gameState = GameState.getInstancia();
const timer = new Timer();
const dilemmaDescription = document.getElementById('dilemma-description');

dilemmaDescription.textContent = cenario.getDilemmaDescription();

let canAdvancePhase = true;

timer.onTimeUp = () => {
  if (canAdvancePhase) {
    gameState.setEscolha(null);
    cenario.setTrainDirection(null);
    canAdvancePhase = false;
    timer.parar();
  }
};

document.getElementById('left-track').addEventListener('click', () => {
  if (timer.isRunning && canAdvancePhase) {
    gameState.setEscolha('left');
    cenario.setTrainDirection('left');
    canAdvancePhase = false;
    timer.parar();
  }
});

document.getElementById('right-track').addEventListener('click', () => {
  if (timer.isRunning && canAdvancePhase) {
    gameState.setEscolha('right');
    cenario.setTrainDirection('right');
    canAdvancePhase = false;
    timer.parar();
  }
});

timer.iniciar();

function gameLoop() {
  cenario.render();
  if (!canAdvancePhase && cenario.train.y >= 480) {
    gameState.proximaFase();
    cenario.updateDilemma(gameState.faseAtual);
    dilemmaDescription.textContent = cenario.getDilemmaDescription();
    timer.limpar();
    cenario.resetTrain();
    timer.iniciar();
    canAdvancePhase = true;
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();