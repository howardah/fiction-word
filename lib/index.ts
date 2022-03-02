import { makeWord } from "./fiction-word";
import { makeParagraph, makeSentence } from "./lorem-ipsum";
import { capitalizeFirstLetter } from "./tools";

export default {
  word: (length?: number): string => capitalizeFirstLetter(makeWord(length)),
  sentence: makeSentence,
  paragraph: makeParagraph,
};
