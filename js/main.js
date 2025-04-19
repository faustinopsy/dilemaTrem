import Cenario from './componentes/Cenario.js'

    const cenario = new Cenario('game-canvas');
    
    function gameLoop() {
      cenario.render();
      requestAnimationFrame(gameLoop);
    }
  
    gameLoop();
