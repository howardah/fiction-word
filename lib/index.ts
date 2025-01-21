import { makeWord } from "./fiction-word";
import { makeParagraph, makeSentence } from "./lorem-ipsum";
import { capitalizeFirstLetter } from "./tools";

/**
 * @description Generates a word with a given length or a normally distributed number.
 * @param length - The given length of the word.
 * @returns The generated word.
 */
export const word = (length?: number): string => capitalizeFirstLetter(makeWord(length));

/**
 * @description Generates a sentence with a given length or a normally distributed number.
 * @param length - The given length of the sentence.
 * @returns The generated sentence.
 */
export const sentence = makeSentence;

/**
 * @description Generates a paragraph with a given length or a normally distributed number.
 * @param length - The given length of the paragraph.
 * @returns The generated paragraph.
 */
export const paragraph = makeParagraph;

export default {
  word,
  sentence,
  paragraph,
};
