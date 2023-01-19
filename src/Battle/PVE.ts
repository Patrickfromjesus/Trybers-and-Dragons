import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  player: Fighter;
  mobs: SimpleFighter[];

  constructor(
    p: Fighter,
    m: SimpleFighter[],
  ) {
    super(p);
    this.player = p;
    this.mobs = m;
  }

  fight(): number {
    // Falta implementar!
    let winner = 0;
    while (winner === 0) {
      this.mobs.forEach((mob) => {
        this.player.attack(mob);
      });
      if (this.mobs.every((mob) => mob.lifePoints === -1)) winner = 1;
      this.mobs.forEach((mob) => {
        mob.attack(this.player);
      });
      if (this.player.lifePoints === -1) winner = -1;
    }
    return winner;
  }
}