import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _level: number;

  constructor(name: string) {
    this._level = 0;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    this._lifePoints -= (damage > 0) ? attackPoints : 1;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._level += 1;
    const maxLife = this._maxLifePoints + getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._maxLifePoints = (maxLife > this._race.maxLifePoints)
      ? this._race.maxLifePoints : maxLife;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: SimpleFighter): void {
    const upStrength = getRandomInt(1, 10); 
    this._strength += upStrength;
    this.attack(enemy);
    this._strength -= upStrength; 
  }
}
