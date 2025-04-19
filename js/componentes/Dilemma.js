import { CharacterFactory } from './Character.js';

export class Dilemma {
  constructor(phase) {
    this.phase = phase;
    this.leftOption = null;
    this.rightOption = null;
    this.description = '';
    this.setupDilemma();
  }

  setupDilemma() {
    const leftX = 100;
    const rightX = 200;
    const y = 350;

    switch (this.phase) {
      case 1:
        this.leftOption = CharacterFactory.createCharacter('car', leftX, y);
        this.rightOption = CharacterFactory.createCharacter('person', rightX, y);
        this.description = 'Fase 1: Um carro de luxo ou uma pessoa?';
        break;
      case 2:
        this.leftOption = CharacterFactory.createCharacter('baby', leftX, y);
        this.rightOption = CharacterFactory.createCharacter('person', rightX, y);
        this.description = 'Fase 2: Um bebê ou um adulto?';
        break;
      case 3:
        this.leftOption = [
          CharacterFactory.createCharacter('elderly', leftX - 20, y),
          CharacterFactory.createCharacter('elderly', leftX + 20, y)
        ];
        this.rightOption = CharacterFactory.createCharacter('baby', rightX, y);
        this.description = 'Fase 3: Dois idosos ou um bebê?';
        break;
      default:
        this.leftOption = CharacterFactory.createCharacter('person', leftX, y);
        this.rightOption = CharacterFactory.createCharacter('person', rightX, y);
        this.description = 'Fase Extra: Duas pessoas.';
    }
  }

  getLeftOption() {
    return Array.isArray(this.leftOption) ? this.leftOption : [this.leftOption];
  }

  getRightOption() {
    return Array.isArray(this.rightOption) ? this.rightOption : [this.rightOption];
  }

  getDescription() {
    return this.description;
  }
}