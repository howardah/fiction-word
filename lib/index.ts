import { makeWord } from "./fiction-word";
import { makeParagraph, makeSentence } from "./lorem-ipsum";
import { capitalizeFirstLetter } from "./tools";

export const word = (length?: number): string => capitalizeFirstLetter(makeWord(length));
export const sentence = makeSentence;
export const paragraph = makeParagraph;

export default {
  word,
  sentence,
  paragraph,
};
