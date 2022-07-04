import Range from '../Range';

describe('Range can detect if contains', () => {
  test('another range', () => {
    expect(new Range('(1, 5]').containsRange(new Range('[2, 4)'))).toBe(true);

    expect(new Range('[2,6)').containsRange(new Range('(2,4)'))).toBe(true);

    expect(new Range('[2,6)').containsRange(new Range('(1, 6)'))).toBe(false);

    expect(new Range('[2,5)').containsRange(new Range('[7, 10)'))).toBe(false);

    expect(new Range('[2,5)').containsRange(new Range('[3, 10)'))).toBe(false);

    expect(new Range('[3,5)').containsRange(new Range('[2, 10)'))).toBe(false);

    expect(new Range('[2,10)').containsRange(new Range('[3, 5)'))).toBe(true);
  });

  test('same range', () => {
    expect(new Range('[3,5]').containsRange(new Range('[3, 5]'))).toBe(false);
  });
});
