import Range from '../Range';

describe('should return endpoints', () => {
  test('from open and closed limits', () => {
    expect(new Range('(1, 5]').endPoints()).toEqual([2, 5]);

    expect(new Range('[2, 4)').endPoints()).toEqual([2, 3]);

    expect(new Range('[2,6)').endPoints()).toEqual([2, 5]);

    expect(new Range('(2,6]').endPoints()).toEqual([3, 6]);
  });

  test('from closed limits', () => {
    expect(new Range('[2,6]').endPoints()).toEqual([2, 6]);
  });

  test('from open limits', () => {
    expect(new Range('(2,6)').endPoints()).toEqual([3, 5]);
  });

  test('from equal limits', () => {
    expect(new Range('(2,2)').endPoints()).toEqual([]);
  });
});
