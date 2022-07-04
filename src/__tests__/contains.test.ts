import Range from '../Range';

describe('Range can detect if contains', () => {
  test('a list of numbers', () => {
    expect(new Range('(1, 5]').contains([2, 6, 25])).toBe(false);

    expect(new Range('[2,6)').contains([-1, 1, 6, 10])).toBe(false);

    expect(new Range('[2,6)').contains([2, 3, 4, 5])).toBe(true);

    expect(new Range('[2,6)').contains([2, 3, 6])).toBe(false);

    expect(new Range('[2,6)').contains([])).toBe(false);
  });

  test('empty list', () => {
    expect(new Range('[2,6)').contains([])).toBe(false);
  });
});
