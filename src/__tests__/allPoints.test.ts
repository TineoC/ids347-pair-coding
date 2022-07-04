import Range from '../Range';

describe('Should return all points from', () => {
  test('open and closed ranges', () => {
    expect(new Range('[2,6)').allPoints()).toEqual([2, 3, 4, 5]);

    expect(new Range('(-3, 3)').allPoints()).toEqual([-2, -1, 0, 1, 2]);

    expect(new Range('(0, 0)').allPoints()).toEqual([]);
  });
});
