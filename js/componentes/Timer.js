export default class Timer {
    constructor() {
      this.timeLeft = 60;
      this.isRunning = false;
      this.timerElement = document.getElementById('timer');
      this.onTimeUp = null;
    }
  
    iniciar() {
      this.isRunning = true;
      this.timeLeft = 60;
      this.atualizaTempo();
      this.interval = setInterval(() => {
        this.timeLeft--;
        this.atualizaTempo();
        if (this.timeLeft <= 0) {
          this.parar();
          if (this.onTimeUp) this.onTimeUp();
        }
      }, 1000);
    }
  
    parar() {
      this.isRunning = false;
      clearInterval(this.interval);
    }
  
    limpar() {
      this.parar();
      this.timeLeft = 60;
      this.atualizaTempo();
    }
  
    atualizaTempo() {
      this.timerElement.textContent = `Tempo: ${this.timeLeft}s`;
    }
  }