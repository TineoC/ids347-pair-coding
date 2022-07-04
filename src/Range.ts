import { inRange } from './InRange';

interface EndPoint {
  value: number;
  closed: boolean;
}

export default class Range {
  input: string;
  lower!: EndPoint;
  higher!: EndPoint;

  constructor(input: string) {
    this.input = input;

    const invalidRangeRegExp = /^(\[|\()\s*(\-)?\d+\s*,\s*(\-)?\d+(\]|\))$/;
    const invalidSeparatorRegExp = /^(\[|\()\s*\d+\s*(,{2,}|[^,])\s*\d+(\]|\))$/;

    const validRange: boolean = invalidRangeRegExp.test(input);
    const invalidSeparator: boolean = invalidSeparatorRegExp.test(input);
    let lowerGreaterThanHigher: boolean = false;

    if (validRange) {
      const first: number = parseInt(input.substring(1, input.indexOf(',')));

      const second: number = parseInt(input.substring(input.indexOf(',') + 1, input.length));

      this.lower = { value: first, closed: input[0] == '[' };

      this.higher = { value: second, closed: input[input.length - 1] == ']' };

      lowerGreaterThanHigher = this.lower.value > this.higher.value;
    }

    if (invalidSeparator) {
      throw Error('Invalid Separator');
    } else if (!validRange || lowerGreaterThanHigher) {
      throw Error('Invalid Range');
    }
  }

  contains(list: number[]): boolean {
    if (list.length === 0) return false;

    list = [...new Set(list)]; // Remove duplicate points from input

    for (const number of list) {
      const lowerEndPoint = this.endPoints()[0];
      const higherEndPoint = this.endPoints()[1];

      if (!inRange(number, lowerEndPoint, higherEndPoint)) {
        return false;
      }
    }

    return true;
  }

  containsRange(range: Range): boolean {
    const lowerEndPoint: number = range.endPoints()[0];
    const higherEndPoint: number = range.endPoints()[1];

    if (this.lower.value < lowerEndPoint && this.higher.value > higherEndPoint) {
      return true;
    }

    return false;
  }

  endPoints(): number[] {
    let endPointsArray: number[] = [];

    const lowerEndpoint: EndPoint = this.lower;
    const higherEndpoint: EndPoint = this.higher;

    if (lowerEndpoint.value === higherEndpoint.value) return endPointsArray;

    if (this.lower.closed) {
      endPointsArray.push(lowerEndpoint.value);
    } else {
      endPointsArray.push(lowerEndpoint.value + 1);
    }

    if (this.higher.closed) {
      endPointsArray.push(higherEndpoint.value);
    } else {
      endPointsArray.push(higherEndpoint.value - 1);
    }

    return endPointsArray;
  }

  overlaps(range: Range): boolean {
    const lowerEndPoint: number = range.endPoints()[0];
    const higherEndPoint: number = range.endPoints()[1];

    if (this.lower.value <= higherEndPoint && lowerEndPoint <= this.higher.value) {
      return true;
    }

    return false;
  }

  equals(range: Range): boolean {
    const rangeAEndpoints: number[] = this.endPoints();

    const rangeBEndpoints: number[] = range.endPoints();

    return JSON.stringify(rangeAEndpoints) === JSON.stringify(rangeBEndpoints);
  }

  allPoints(): number[] {
    let points: number[] = [];

    if (!this.endPoints()) return points;

    const start: number = this.endPoints()[0];
    const limit: number = this.endPoints()[1];

    let index: number = start;

    while (index <= limit) {
      points.push(index);
      index++;
    }

    return points;
  }
}
