import Range from '../Range';

describe('equal function should detect for', () => {
  test('equal Ranges', () => {
    expect(new Range('[3,5)').equals(new Range('[3,5)')));
  });

  test('distinct Ranges', () => {
    expect(new Range('[2,10)').equals(new Range('(1,9]')));

    expect(new Range('[2,10)').equals(new Range('[3,5)')));

    expect(new Range('[2,5)').equals(new Range('[3,10)')));

    expect(new Range('[3,5)').equals(new Range('[2,10)')));

    expect(new Range('[ 2 ,   5]').equals(new Range('(1,5]')));
  });
});
