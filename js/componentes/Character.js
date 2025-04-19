export class Character {
    constructor(type, x, y) {
      this.type = type;
      this.x = x;
      this.y = y;
      this.width = 40;
      this.height = 60;
      this.image = new Image();
      this.setImage();
    }
  
    setImage() {
      switch (this.type) {
        case 'person':
          this.image.src = 'assets/person.png';
          break;
        case 'baby':
          this.image.src = 'assets/baby.png';
          break;
        case 'car':
          this.image.src = 'assets/car.png';
          break;
        case 'elderly':
          this.image.src = 'assets/elderly.png';
          break;
        default:
          this.image.src = 'assets/person.png';
      }
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
  
  export class CharacterFactory {
    static createCharacter(type, x, y) {
      return new Character(type, x, y);
    }
  }