import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(lifeEdit?: number) {
    super();
    this._lifePoints = lifeEdit || 999;
  }
}
