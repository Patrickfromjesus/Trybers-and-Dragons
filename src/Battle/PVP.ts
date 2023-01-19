import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  player1: Fighter;
  player2: Fighter;
  
  constructor(p1: Fighter, p2: Fighter) {
    super(p1);
    this.player1 = p1;
    this.player2 = p2;
  }

  fight(): number {
    let winner = 0;
    while (winner === 0) {
      this.player1.attack(this.player2);
      if (this.player2.lifePoints === -1) winner = 1;
      this.player2.attack(this.player1);
      if (this.player1.lifePoints === -1) winner = -1;
    }
    return winner;
  }
}
