/*
 * This file contains functions for generating random word lengths based on a predefined distribution.
 * The distribution is based on the frequency of word lengths in default linux English dictionary.
 *
 * This can be found with the command:
 * `sed "s/'s//" /usr/share/dict/words | sort | uniq | awk '{ print length($0); }' | sort -n | uniq -c`
 *
 * Source: https://www.reddit.com/r/dataisbeautiful/comments/6jbt4d/a_distribution_of_english_words_by_length_using/
 */

const dictionaryDistribution: [number, number][] = [
  [1, 52],
  [2, 488],
  [3, 1385],
  [4, 3688],
  [5, 6717],
  [6, 10268],
  [7, 13451],
  [8, 13869],
  [9, 12363],
  [10, 9823],
  [11, 6922],
  [12, 4454],
  [13, 2549],
  [14, 1284],
  [15, 629],
  [16, 260],
  [17, 124],
  [18, 38],
  [19, 18],
  [20, 13], // 20+
];

/**
 * This is a distribution of word lengths based on their frequency of use in the English language.
 * The data for this distribution can be found on the third page of the source document.
 *
 * Source: https://math.wvu.edu/~hdiamond/Math222F17/Sigurd_et_al-2004-Studia_Linguistica.pdf
 */

const corpusDistribution: [number, number][] = [
  [1, 0.03],
  [2, 0.17],
  [3, 0.21],
  [4, 0.16],
  [5, 0.11],
  [6, 0.08],
  [7, 0.08],
  [8, 0.06],
  [9, 0.04],
  [10, 0.03],
  [11, 0.03], // 11+
];

/**
 * @description Computes the cumulative distribution of word lengths.
 * @returns An array of cumulative probabilities for each word length.
 */
export function generateDistribution(mode: "dictionary" | "corpus" = "dictionary", max = 20) {
  // Distribution of word lengths
  const distribution: [number, number][] =
    mode === "dictionary" ? dictionaryDistribution : corpusDistribution;

  const total = distribution.reduce((sum, [, count]) => sum + count, 0);

  // Precompute cumulative probabilities
  const cumulative: [number, number][] = [];
  let sum = 0;
  for (const [length, count] of distribution) {
    // Don't include max+ as it's a tail distribution
    if (length === max) break;
    sum += count;
    cumulative.push([length, sum / total]);
  }

  return cumulative;
}

/**
 * Sample a word length from the long tail distribution.
 * @param min The minimum word length.
 * @param max The maximum word length.
 * @param decay The decay rate.
 * @returns A random word length.
 */
function sampleLongTail(min = 20, max = 30, decay = 0.6) {
  // A geometric decay for 20+ length
  const r = Math.random();
  let cumulative = 0;
  for (let i = 0; i <= max - min; i++) {
    const prob = decay ** i * (1 - decay);
    cumulative += prob;
    if (r < cumulative) return min + i;
  }
  return max; // fallback
}

/**
 * Sample a word length from the distribution.
 * @returns A random word length.
 */
export function getRandomWordLength(distribution?: [number, number][]) {
  distribution = distribution || generateDistribution();
  const rand = Math.random();
  for (const [length, prob] of distribution) {
    if (rand < prob) return length;
  }
  // If it falls into the 20+ tail
  return sampleLongTail();
}
