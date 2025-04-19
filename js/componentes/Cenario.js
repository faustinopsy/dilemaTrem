export default class Cenario {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
      this.trackImage = new Image();
      this.trackImage.src = 'assets/track.png';
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    drawTracks() {
      this.ctx.drawImage(this.trackImage, 70, 30, 200, 450);
    }
  
    render() {
      this.clear();
      this.drawTracks();
    }
  }