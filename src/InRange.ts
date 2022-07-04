export function inRange(x: number, min: number, max: number): boolean {
  return (x - min) * (x - max) <= 0;
}
