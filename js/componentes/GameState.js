export  default class GameState {
    static instancia = null;
  
    constructor() {
      if (GameState.instancia) {
        return GameState.instancia;
      }
      this.faseAtual = 1;
      this.escolha = null;
      this.fim = false;
      GameState.instancia = this;
    }
  
    static getInstancia() {
      if (!GameState.instancia) {
        GameState.instancia = new GameState();
      }
      return GameState.instancia;
    }
  
    proximaFase() {
      this.faseAtual++;
      this.escolha = null;
    }
  
    setEscolha(escolha) {
      this.escolha = escolha;
    }
  
    reset() {
      this.faseAtual = 1;
      this.escolha = null;
      this.fim = false;
    }
  }