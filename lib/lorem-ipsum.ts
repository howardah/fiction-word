import { makeWord } from "./fiction-word";
import { budgeByOdds, capitalizeFirstLetter, range } from "./tools";

/**
 * @description Generates a sentence with a given length or a normally distributed number.
 * @param length - The given length of the sentence in words.
 * @returns The generated sentence.
 */
export const makeSentence = (length?: number): string => {
  const bottom = budgeByOdds(15, 10, "down");
  const top = budgeByOdds(20, 10, "up");

  length = Math.max(1, length || range(bottom, top));
  let sentence = `${capitalizeFirstLetter(makeWord())} `;
  for (let i = 1; i < length; i++) {
    sentence += `${makeWord()} `;
  }

  return `${sentence.trim()}.`;
};

/**
 * @description Generates a paragraph with a given length or a normally distributed number.
 * @param length - The given length of the paragraph in sentences.
 * @returns The generated paragraph.
 */
export const makeParagraph = (length?: number): string => {
  const bottom = budgeByOdds(2, 5, "down");
  const top = budgeByOdds(6, 10, "up");

  length = Math.max(1, length || range(bottom, top));
  let paragraph = makeSentence();
  for (let i = 1; i < length; i++) {
    paragraph += `${makeSentence()} `;
  }

  return paragraph.trim();
};
