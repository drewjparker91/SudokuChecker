import Checker from './../src/sudokuChecker.js';

describe('Checker', () => {



  test("should check if the value of a single row is 45 and return true", () => {
    const checker = new Checker();
    const total = checker.rowCheck();
    expect(total).toEqual(45);
  });

  test("should check if the value of a single column is 45 and return true", () => {
    const checker = new Checker();
    const total = checker.rowCheck();
    expect(total).toEqual(45);
  });

  // const player = new Player();
  // player.rollDice();
  // expect(player.roll <= 6 && player.roll >= 1).toBe(true);

});