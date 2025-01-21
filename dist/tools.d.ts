/**
 * @description Returns true if the odds are in favor of the event.
 * @param percent - The percentage chance of the event happening.
 * @returns True if the odds are in favor of the event, false otherwise.
 */
declare function theOdds(percent: number): boolean;
/**
 * @description Bends a number by a percentage chance in a given direction.
 * @param num - The number to bend.
 * @param percent - The percentage chance of bending the number.
 * @param direction - The direction to bend the number.
 * @returns The bent number.
 */
declare const budgeByOdds: (num: number, percent: number, direction: 'down' | 'up') => number;
/**
 * @description Returns a random number between two numbers.
 * @param bottom - The bottom of the range.
 * @param top - The top of the range.
 * @returns A random number between the bottom and top.
 */
declare function range(bottom: number, top: number): number;
/**
 * @description Capitalizes the first letter of a string.
 * @param string - The string to capitalize.
 * @returns The capitalized string.
 */
declare function capitalizeFirstLetter(string: string): string;
export { theOdds, budgeByOdds, capitalizeFirstLetter, range };
