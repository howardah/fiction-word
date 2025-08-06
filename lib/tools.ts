/**
 * @description Returns true if the odds are in favor of the event.
 * @param percent - The percentage chance of the event happening.
 * @returns True if the odds are in favor of the event, false otherwise.
 */
export function theOdds(percent: number): boolean {
  var Odds = Math.floor(Math.random() * 100);
  return Odds < percent;
}

/**
 * @description Bends a number by a percentage chance in a given direction.
 * @param num - The number to bend.
 * @param percent - The percentage chance of bending the number.
 * @param direction - The direction to bend the number.
 * @returns The bent number.
 */
export function budgeByOdds(num: number, percent: number, direction: "down" | "up"): number {
  const down = direction === "down";
  while (theOdds(percent)) down ? num-- : num++;
  return num;
}

/**
 * @description Returns a random number between two numbers.
 * @param bottom - The bottom of the range.
 * @param top - The top of the range.
 * @returns A random number between the bottom and top.
 */
export function range(bottom: number, top: number): number {
  const min = Math.ceil(bottom);
  const max = Math.floor(top);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description Returns a random number from a Gaussian distribution using the Box-Muller transform.
 * @param mean - The mean of the distribution.
 * @param standardDeviation - The standard deviation of the distribution.
 * @returns A random number from the Gaussian distribution.
 */
export function gaussianRandom(mean = 0, standardDeviation = 1) {
  const uniform1 = 1 - Math.random(); // Subtract from 1 to avoid log(0)
  const uniform2 = Math.random();

  const theta = Math.cos(2.0 * Math.PI * uniform2);
  const standardNormal = Math.sqrt(-2.0 * Math.log(uniform1)) * theta;

  // Scale and shift to desired mean and standard deviation
  return standardNormal * standardDeviation + mean;
}

/**
 * @description Capitalizes the first letter of a string.
 * @param string - The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
