import { makeWord } from "./fiction-word";
import { budgeByOdds, capitalizeFirstLetter, range } from "./tools";
import { generateDistribution } from "./word-length";

export interface IpsumOptions {
  length?: number;
  wordDistribution?: [number, number][];
}

/**
 * @description Generates a sentence with a given length or a normally distributed number.
 * @param length - The given length of the sentence in words.
 * @returns The generated sentence.
 */
export const makeSentence = (options?: number | IpsumOptions): string => {
  let length = typeof options === "number" ? options : options?.length;
  const distribution =
    (typeof options === "object" && options.wordDistribution) ||
    generateDistribution("corpus");

  const bottom = budgeByOdds(15, 10, "down");
  const top = budgeByOdds(20, 10, "up");

  length = Math.max(1, length || range(bottom, top));
  let sentence = `${capitalizeFirstLetter(makeWord({ distribution }))} `;
  for (let i = 1; i < length; i++) {
    sentence += `${makeWord({ distribution })} `;
  }

  return `${sentence.trim()}.`;
};

/**
 * @description Generates a paragraph with a given length or a normally distributed number.
 * @param length - The given length of the paragraph in sentences.
 * @returns The generated paragraph.
 */
export const makeParagraph = (options?: number | IpsumOptions): string => {
  let length = typeof options === "number" ? options : options?.length;
  const wordDistribution =
    (typeof options === "object" && options.wordDistribution) ||
    generateDistribution("corpus");

  const bottom = budgeByOdds(2, 5, "down");
  const top = budgeByOdds(6, 10, "up");

  length = Math.max(1, length || range(bottom, top));
  let paragraph = "";
  for (let i = 0; i < length; i++) {
    paragraph += `${makeSentence({ wordDistribution })} `;
  }

  return paragraph.trim();
};
