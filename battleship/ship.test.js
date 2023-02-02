import { describe, expect, it } from 'vitest';
import Ship from './ship';

describe('#ship', () => {
  const ship = new Ship(5);
  it('Length', () => {
    expect(ship.length).toBe(5);
  });

  it('Hit', () => {
    ship.hit();

    expect(ship.hits).toBe(1);
  });

  it('Is Sunk', () => {
    expect(ship.isSunk()).toBe(false);
  });
});
