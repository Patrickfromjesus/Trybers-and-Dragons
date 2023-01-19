import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static instancesQnt = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 80;
    Dwarf.instancesQnt += 1; 
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number { 
    return Dwarf.instancesQnt;
  }
}
