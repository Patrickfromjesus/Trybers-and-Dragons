import Energy from '../Energy';

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
}

export interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}
