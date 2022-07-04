import Range from '../Range';

describe('should throw error', () => {
  const invalidRangeErrorMessage: string = 'Invalid Range';
  const invalidSeparatorErrorMessage: string = 'Invalid Separator';

  test('with first limit greater than second', () => {
    expect(() => {
      new Range('[43,2]');
    }).toThrowError(invalidRangeErrorMessage);
  });

  test('with invalid separator', () => {
    expect(() => {
      new Range('[43 - 1]');
    }).toThrowError(invalidSeparatorErrorMessage);

    expect(() => {
      new Range('[1234-5263]');
    }).toThrowError(invalidSeparatorErrorMessage);
  });

  test('with invalid input', () => {
    expect(() => {
      new Range("['hola']");
    }).toThrowError(invalidRangeErrorMessage);

    expect(() => {
      new Range('[{1, 2, 3, 5}]');
    }).toThrowError(invalidRangeErrorMessage);

    expect(() => {
      new Range('[-24,, 859]');
    }).toThrowError(invalidRangeErrorMessage);

    expect(() => {
      new Range('[-24-, 859]');
    }).toThrowError(invalidRangeErrorMessage);

    expect(() => {
      new Range('{43, 2]');
    }).toThrowError(invalidRangeErrorMessage);

    expect(() => {
      new Range('christophertineo02@gmail.com');
    }).toThrowError(invalidRangeErrorMessage);

    expect(() => {
      new Range('40245283995');
    }).toThrowError(invalidRangeErrorMessage);
  });

  test('not throw', () => {
    expect(() => {
      new Range('(-1,1]');
    }).not.toThrowError();
  });
});
