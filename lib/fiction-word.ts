import { theOdds } from "./tools";

/**
 * @description Generates a word length based on the given length or a normally distributed number.
 * @param givenLength - The given length of the word.
 * @returns The generated word length.
 */
function makeWordLength(givenLength?: number): number {
  if (givenLength !== undefined) {
    return givenLength;
  }

  // Generate a normally distributed number centered around 5.5
  // Using average of multiple random numbers for approximate normal distribution
  const min = 1;
  const max = 14;
  const mean = 5.5;

  // Average 3 random numbers to approximate normal distribution
  const normalRandom = (
    Math.random() +
    Math.random() +
    (mean / (max - min))
  ) / 3;

  // Scale and shift the result to get desired range
  const length = Math.round(normalRandom * (max - min));

  // Ensure the length is within reasonable bounds
  return Math.max(min, Math.min(max, length));
}

/**
 * @description Generates a word based on the given length or a normally distributed number.
 * @param givenLength - The given length of the word.
 * @param lengthType - The type of length variance.
 * @returns The generated word.
 */
function makeWord(givenLength?: number, lengthType?: 'flex' | 'exact'): string {
  const lengthVariance = lengthType ?? (givenLength === undefined ? 'flex' : 'exact');

  // The odds of removing an unusual ending letter
  const oddEnding: { [key: string]: number } = {
    i: 70,
    u: 70,
    a: 30,
    o: 50,
    j: 90,
    q: 30,
  };

  const wordLength = givenLength || makeWordLength(givenLength);

  let word = "";
  while (word.length < wordLength) {
    word += giveMeALetter(word, wordLength);

    if (word.length >= wordLength) {
      const lastChar = word.charAt(word.length - 1);

      if (lastChar in oddEnding) {
        if (theOdds(oddEnding[lastChar])) word = word.slice(0, -1);
      }

      // If the word doesn't contain any vowels, it's not a valid word
      if (!/[aeiou]/g.test(word)) {
        word = "";
      } else if (lengthVariance === "exact" && word.length > wordLength) {
        word = "";
      }
    }
  }

  if (/eee/g.test(word)) word = word.replace(/eee/g, "ee");
  if (/ii/g.test(word)) word = word.replace(/ii/g, "i");

  if (/y[b, t, k, r, z]$/.test(word) && theOdds(90))
    word = word.replace(/y([^y]*)$/, "i" + "$1");

  return word.trim();
}

/**
 * @description Generates a letter based on the given word and word length.
 * @param newWord - The given word.
 * @param wordLength - The length of the word.
 * @returns The generated letter.
 */
function giveMeALetter(newWord: string, wordLength: number) {
  const prefixes = ["str", "pre", "dia", "gh", "wh", "psy"];
  const suffixes = ["tion", "ing", "ies", "ed", "er", "ght", "gh", "ck", "ff", "que", "nd"];
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const consonants = [
      ...["b", "c", "d", "f", "g", "h", "j", "k", "l", "m"],
      ...["n", "p", "q", "r", "s", "t", "v", "x", "z", "w", "y"],
  ];
  const marked = ["z", "x", "j"];
  const consonantCluster = [
    ...["tr", "sc", "th", "sh", "ch", "br", "bl", "cl", "cr"],
    ...["ff", "que", "qu", "dr", "sw"],
  ];
  const dipthong = ["ee", "ea", "io", "oo", "ou", "eau"];
  const lastLetter = newWord.charAt(newWord.length - 1);
  const letterBefore = newWord.charAt(newWord.length - 2);
  
  let possibles: string[] = [],
    checker = false,
    chosenLetter = "";

  if (vowels.includes(lastLetter) && !(lastLetter === "y" && newWord.length === 1)) {
    if (wordLength - newWord.length <= 2) {
      possibles = possibles.concat(consonants, consonants, suffixes);
      if (/[e,a,i,o,u]{3}$/.test(newWord)) {
        possibles = removeLetters(possibles, ["ies", "ed", "er", "ing"]);
      } else if (/[e,a,i,o,u]{2}$/.test(newWord)) {
        possibles = removeLetters(possibles, ["ies"]);
        if (!/[e]{2}$/.test(newWord)) possibles = removeLetters(possibles, ["ed", "er", "ing"]);
      }
    } else {
      possibles = possibles.concat(consonantCluster, consonants);
    }
  } else if (consonants.includes(lastLetter)) {
    possibles = possibles.concat(vowels, vowels, dipthong);
    if (wordLength - newWord.length <= 2) possibles = possibles.concat(vowels, vowels);
  } else {
    // vowels = removeLetters(vowels, ["y"]);
    removeLetters(vowels, ["y"]);
    possibles = possibles.concat(vowels, consonants);
    if (wordLength > 3) possibles = possibles.concat(prefixes, consonantCluster);
    if (theOdds(20)) possibles = possibles.concat(dipthong);

    possibles = removeLetters(possibles, ["ff"]);
  }

  switch (lastLetter) {
    case "i":
      if (theOdds(70)) possibles = removeLetters(possibles, ["w", "q", "x"]);
      break;
    case "q":
      if (newWord.length !== wordLength - 1 || wordLength == 2) {
        if (theOdds(90)) possibles = ["u"];
      } else {
        return " ";
      }
      break;
    case "u":
      if (letterBefore === "q" && theOdds(60)) possibles = ["e"];
      break;
    case "y":
      possibles = removeLetters(possibles, ["y"]);
      break;
    default:
      break;
  }

  chosenLetter = possibles[Math.floor(Math.random() * possibles.length)];

  checker = false;

  switch (chosenLetter) {
    case "eau":
      if (theOdds(40)) possibles = removeLetters(possibles, ["eau"]);
      checker = true;
      break;
    case "q":
    case "qu":
    case "que":
      if (theOdds(60)) {
        checker = true;
      }
      if (/q/g.test(newWord) && theOdds(93)) {
        possibles = removeLetters(possibles, ["q", "que", "qu"]);
        checker = true;
      }
      if (chosenLetter === "que" && wordLength < 5 && theOdds(93)) {
        possibles = removeLetters(possibles, ["que"]);
        checker = true;
      }
      break;
    case "y":
      if (theOdds(60)) {
        checker = true;
      }
      break;
    default:
      break;
  }

  if (chosenLetter === letterBefore) {
    if (theOdds(60)) {
      possibles = removeLetters(possibles, [chosenLetter]);
    }
    checker = true;
  }

  if (marked.includes(chosenLetter) && theOdds(80)) {
    var re = new RegExp(chosenLetter, "g");

    if (theOdds(60)) {
      possibles = removeLetters(possibles, marked);
    }

    if (re.test(newWord) && theOdds(98)) {
      possibles = removeLetters(possibles, [chosenLetter]);
    }

    checker = true;
  }

  if (checker) {
    if (chosenLetter !== letterBefore && !marked.includes(chosenLetter)) checker = false;
    chosenLetter = possibles[Math.floor(Math.random() * possibles.length)];
  }

  return (chosenLetter !== undefined ? chosenLetter : "").trim();
}

/**
 * @description Removes letters from an array.
 * @param arr - The array to remove letters from.
 * @param letters - The letters to remove.
 * @returns The array with the letters removed.
 */
function removeLetters(arr: string[], letters: string[]) {
  for (var i = 0; i < arr.length; i++) {
    if (letters.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }

  return arr;
}

export { makeWord };
