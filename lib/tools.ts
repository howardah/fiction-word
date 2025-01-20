/**
 * @description Returns true if the odds are in favor of the event.
 * @param percent - The percentage chance of the event happening.
 * @returns True if the odds are in favor of the event, false otherwise.
 */
function theOdds(percent: number): boolean {
  var Odds = Math.floor(Math.random() * 100);
  return Odds < percent ? true : false;
}

/**
 * @description Bends a number by a percentage chance in a given direction.
 * @param num - The number to bend.
 * @param percent - The percentage chance of bending the number.
 * @param direction - The direction to bend the number.
 * @returns The bent number.
 */
const budgeByOdds = (num: number, percent: number, direction: string): number => {
  const down = direction === "down";
  while (theOdds(percent)) down ? num-- : num++;
  return num;
};

/**
 * @description Returns a random number between two numbers.
 * @param bottom - The bottom of the range.
 * @param top - The top of the range.
 * @returns A random number between the bottom and top.
 */
function range(bottom: number, top: number): number {
  const min = Math.ceil(bottom);
  const max = Math.floor(top);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description Capitalizes the first letter of a string.
 * @param string - The string to capitalize.
 * @returns The capitalized string.
 */
function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { theOdds, budgeByOdds, capitalizeFirstLetter, range };
