import { makeNewWord } from "./fiction-word";

export default {
  wordGen: function wordGen(length: number): string {
    return makeNewWord(length);
  },
};
