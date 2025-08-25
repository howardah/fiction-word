import {
  corpusDistribution,
  dictionaryDistribution,
  sentenceLengthDistribution,
} from "./distributions";

export type Distribution = [number, number][];

/**
 * @description Computes the cumulative distribution of word lengths.
 * @returns An array of cumulative probabilities for each word length.
 */
export function generateDistribution(
  mode: "dictionary" | "corpus" | "sentence" = "dictionary",
  max?: number,
) {
  // Distribution of word lengths
  const distribution: Distribution = [];

  switch (mode) {
    case "dictionary":
      distribution.push(...dictionaryDistribution);
      break;
    case "corpus":
      distribution.push(...corpusDistribution);
      break;
    case "sentence":
      distribution.push(...sentenceLengthDistribution);
      break;
  }

  if (typeof max !== "number") {
    max = distribution[distribution.length - 1][0];
  }

  const total = distribution.reduce((sum, [, count]) => sum + count, 0);

  // Precompute cumulative probabilities
  const cumulative: Distribution = [];
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
export function getRandomLengthFromDistribution(distribution?: Distribution) {
  distribution = distribution || generateDistribution("dictionary");
  const rand = Math.random();
  for (const [length, prob] of distribution) {
    if (rand < prob) return length;
  }
  // If it falls into the tail
  return sampleLongTail();
}

export function validDistribution(distribution?: Distribution): Distribution | null {
  if (!distribution) return null;
  if (!Array.isArray(distribution)) return null;
  if (distribution.length === 0) return null;
  if (
    !distribution.every(
      ([length, count]) => typeof length === "number" && typeof count === "number",
    )
  )
    return null;
  // if (!distribution.every(([length, count]) => length >= 1 && count >= 0)) return null;
  // if (!distribution.every(([length, _count], i, arr) => i === 0 || length > arr[i - 1][0]))
  //   return null;
  // if (!distribution.every(([_length, count], i, arr) => i === 0 || count >= arr[i - 1][1]))
  //   return null;
  return distribution;
}
