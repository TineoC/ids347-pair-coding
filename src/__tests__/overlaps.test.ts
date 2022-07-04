import Range from '../Range';

describe('can detect when overlapping', () => {
  test('another range', () => {
    expect(new Range('[2,5)').overlaps(new Range('[7,10)'))).toBe(false);

    expect(new Range('[0, 2)').overlaps(new Range('(-1, 1]'))).toBe(true);

    expect(new Range('[2, 10)').overlaps(new Range('[3, 5)'))).toBe(true);

    expect(new Range('[3, 5)').overlaps(new Range('[3, 5)'))).toBe(true);

    expect(new Range('[2, 5)').overlaps(new Range('[3, 10)'))).toBe(true);

    expect(new Range('[3, 5)').overlaps(new Range('[2, 10)'))).toBe(true);

    expect(new Range('[0, 2)').overlaps(new Range('[2, 2)'))).toBe(false);

    expect(new Range('[0, 0]').overlaps(new Range('(0, 1)'))).toBe(false);
  });
});
