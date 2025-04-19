import Cenario from './componentes/Cenario.js'
import Timer from './componentes/Timer.js'
    const cenario = new Cenario('game-canvas');
    const time = new Timer()
    time.iniciar()
    
    function gameLoop() {
      cenario.render();
      
      
      requestAnimationFrame(gameLoop);
    }
  
    gameLoop();
