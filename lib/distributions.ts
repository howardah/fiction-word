/*
 * This file contains functions for generating random word lengths based on a predefined distribution.
 * The distribution is based on the frequency of word lengths in default linux English dictionary.
 *
 * This can be found with the command:
 * `sed "s/'s//" /usr/share/dict/words | sort | uniq | awk '{ print length($0); }' | sort -n | uniq -c`
 *
 * Source: https://www.reddit.com/r/dataisbeautiful/comments/6jbt4d/a_distribution_of_english_words_by_length_using/
 */

export const dictionaryDistribution: [number, number][] = [
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

export const corpusDistribution: [number, number][] = [
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
 * This is a distribution of sentence lengths based on their frequency of use in the English language.
 * The data for this distribution can be found on the twelfth page of the source document.
 *
 * Source: https://math.wvu.edu/~hdiamond/Math222F17/Sigurd_et_al-2004-Studia_Linguistica.pdf
 */

export const sentenceLengthDistribution: [number, number][] = [
  [1, 0.806],
  [2, 1.37],
  [3, 1.862],
  [4, 2.547],
  [5, 3.043],
  [6, 3.189],
  [7, 3.516],
  [8, 3.545],
  [9, 3.286],
  [10, 3.533],
  [11, 3.562],
  [12, 3.788],
  [13, 3.669],
  [14, 3.751],
  [15, 3.518],
  [16, 3.541],
  [17, 3.434],
  [18, 3.305],
  [19, 3.229],
  [20, 3.103],
  [21, 2.867],
  [22, 2.724],
  [23, 2.647],
  [24, 2.526],
  [25, 2.086],
  [26, 2.178],
  [27, 2.128],
  [28, 1.801],
  [29, 1.69],
  [30, 1.556],
  [31, 1.512],
  [32, 1.326],
  [33, 1.277],
  [34, 1.062],
  [35, 1.051],
  [36, 0.901],
  [37, 0.838],
  [38, 0.764],
  [39, 0.683],
  [40, 0.589],
  [41, 0.624],
  [42, 0.488],
  [43, 0.477],
  [44, 0.406],
  [45, 0.39],
  [46, 0.35],
  [47, 0.318],
  [48, 0.241],
  [49, 0.224],
  [50, 0.22],
  [51, 0.262],
  [52, 0.207],
  [53, 0.174],
  [54, 0.174],
  [55, 0.128],
  [56, 0.121],
  [57, 0.103],
  [58, 0.117],
  [59, 0.124],
  [60, 0.082],
  [61, 0.088],
  [62, 0.061],
  [63, 0.061],
  [64, 0.075],
  [65, 0.063],
  [66, 0.056],
  [67, 0.052],
  [68, 0.057],
  [69, 0.031],
  [70, 0.029],
  [71, 0.021],
  [72, 0.017],
  [73, 0.021],
  [74, 0.034],
  [75, 0.031],
  [76, 0.011],
  [77, 0.011],
  [78, 0.008],
  [79, 0.006],
  [80, 0.232], // 80+
];
