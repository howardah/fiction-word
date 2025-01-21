/**
 * @description Generates a word based on the given length or a normally distributed number.
 * @param givenLength - The given length of the word.
 * @param lengthType - The type of length variance.
 * @returns The generated word.
 */
declare function makeWord(givenLength?: number, lengthType?: 'flex' | 'exact'): string;
export { makeWord };
