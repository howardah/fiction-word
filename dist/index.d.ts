/**
 * @description Generates a word with a given length or a normally distributed number.
 * @param length - The given length of the word.
 * @returns The generated word.
 */
export declare const word: (length?: number) => string;
/**
 * @description Generates a sentence with a given length or a normally distributed number.
 * @param length - The given length of the sentence.
 * @returns The generated sentence.
 */
export declare const sentence: (length?: number | undefined) => string;
/**
 * @description Generates a paragraph with a given length or a normally distributed number.
 * @param length - The given length of the paragraph.
 * @returns The generated paragraph.
 */
export declare const paragraph: (length?: number | undefined) => string;
declare const _default: {
    word: (length?: number | undefined) => string;
    sentence: (length?: number | undefined) => string;
    paragraph: (length?: number | undefined) => string;
};
export default _default;
