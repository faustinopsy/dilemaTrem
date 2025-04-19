export class Train {
  constructor() {
    this.x = 145;
    this.y = -200;
    this.width = 50;
    this.height = 100;
    this.speed = 2;
    this.direction = null;
    this.isMoving = false;
    this.image = new Image();
    this.image.src = 'assets/train.png';
  }

  move() {
    if (!this.isMoving) return;

    if (this.y < 130 && !this.direction) {
      this.y += this.speed;
      this.x = 145;
    } else {
      this.y += this.speed;

      if (this.direction === 'left') {
        if (this.y >= 130 && this.y <= 480) {
          const progress = (this.y - 130) / (480 - 130);
          this.x = 145 - (145 - 70) * progress;
        }
      } else if (this.direction === 'right') {
        if (this.y >= 130 && this.y <= 480) {
          const progress = (this.y - 130) / (480 - 130);
          this.x = 145 + (220 - 145) * progress;
        }
      } else {
        this.x = 145;
      }
    }

    if (this.y > 480) {
      this.isMoving = false;
      this.reset();
    }
  }

  startMoving() {
    this.isMoving = true;
  }

  reset() {
    this.x = 145;
    this.y = -200;
    this.direction = null;
    this.isMoving = false;
  }

  setDirection(direction) {
    if (!this.isMoving) {
      this.direction = direction;
    }
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}