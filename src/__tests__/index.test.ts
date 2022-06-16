describe('A range', () => {
  const testRange1 = new Range('[2,6)');
  const testRange2 = new Range('(2,8}');
  const testRange3 = new Range('{0,6]');

  test(`shouldn't create empty Range`, () => {
    const testRange = new Range();

    expect(testRange).toThrowError("Can't create empty Range");
  });

  test(`shouldn't create invalid Range`, () => {
    let invalidRange = new Range('2,3');

    expect(invalidRange).toThrowError('Invalid Range');

    invalidRange = new Range('[2,3');

    expect(invalidRange).toThrowError('Invalid Range');

    invalidRange = new Range('2,3}');

    expect(invalidRange).toThrowError('Invalid Range');

    invalidRange = new Range('23');

    expect(invalidRange).toThrowError('Invalid Range');

    invalidRange = new Range('');

    expect(invalidRange).toThrowError('Invalid Range');

    invalidRange = new Range(undefined);

    expect(invalidRange).toThrowError('Invalid Range');

    invalidRange = new Range(null);

    expect(invalidRange).toThrowError('Invalid Range');

    invalidRange = new Range('felipe');

    expect(invalidRange).toThrowError('Invalid Range');

    invalidRange = new Range(false);

    expect(invalidRange).toThrowError('Invalid Range');
  });

  test('identify which ranges it contains', () => {
    expect(testRange1.contains('{2,4}')).toBe(true);

    expect(testRange1.contains('{-1, 1, 6, 10}')).not.toBe(true);

    expect(testRange1.contains('{4}')).toBe(true);
  });

  test('identify all integer points inside', () => {
    expect(testRange1.allPoints()).toBe([2, 3, 4, 5]);
    expect(testRange2.allPoints()).toBe([3, 4, 5, 6, 7]);
    expect(testRange3.allPoints()).toBe([1, 2, 3, 4, 5, 6]);
  });

  test('identify if contains other range', () => {});
});
