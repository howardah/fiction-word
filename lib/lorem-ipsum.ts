import { makeWord } from "./fiction-word";
import { budgeByOdds, capitalizeFirstLetter, range, theOdds } from "./tools";

const makeSentence = (length?: number): string => {
  const bottom = budgeByOdds(15, 10, "down");
  const top = budgeByOdds(20, 10, "up");

  length = length || range(bottom, top);
  if (length < 1) length = 1;
  let sentence = `${capitalizeFirstLetter(makeWord())} `;
  for (let i = 1; i < length; i++) {
    sentence += `${makeWord()} `;
  }

  return `${sentence.slice(0, -1)}.`;
};

const makeParagraph = (length?: number): string => {
  const bottom = budgeByOdds(2, 5, "down");
  const top = budgeByOdds(6, 10, "up");

  length = length || range(bottom, top);
  if (length < 1) length = 1;
  let paragraph = makeSentence();
  for (let i = 1; i < length; i++) {
    paragraph += `${makeSentence()} `;
  }

  return paragraph.slice(0, -1);
};

export { makeSentence, makeParagraph };
