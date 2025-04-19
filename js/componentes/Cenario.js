import { Train } from './Train.js';
import { Dilemma } from './Dilemma.js';

export default class Cenario {
  constructor(canvasId, fase) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.trackImage = new Image();
    this.trackImage.src = 'assets/track.png';
    
    this.dilemma = new Dilemma(fase);
    this.train = new Train();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawTracks() {
    this.ctx.drawImage(this.trackImage, 70, 30, 200, 450);
  }

  drawCharacters() {
    this.dilemma.getLeftOption().forEach(character => character.draw(this.ctx));
    this.dilemma.getRightOption().forEach(character => character.draw(this.ctx));
  }

  render() {
    this.clear();
    this.drawTracks();
    this.train.move();
    this.train.draw(this.ctx);
    this.drawCharacters();
  }

  setTrainDirection(direction) {
    this.train.setDirection(direction);
    this.train.startMoving();
  }

  resetTrain() {
    this.train.reset();
  }

  updateDilemma(fase) {
    this.dilemma = new Dilemma(fase);
  }

  getDilemmaDescription() {
    return this.dilemma.getDescription();
  }
}