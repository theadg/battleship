import { describe, expect, it } from 'vitest';
import GameBoard from '../components/gameboard';

describe('#gameBoard', () => {
  const gb = new GameBoard();

  it('Gameboard Length', () => {
    expect(gb.gb.length).toBe(10);
  });

  gb.gb.forEach((element) => {
    it('arraylen', () => {
      expect(element.length).toBe(10);
    });
  });
});
