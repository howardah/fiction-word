"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeParagraph = exports.makeSentence = void 0;
var fiction_word_1 = require("./fiction-word");
var tools_1 = require("./tools");
/**
 * @description Generates a sentence with a given length or a normally distributed number.
 * @param length - The given length of the sentence in words.
 * @returns The generated sentence.
 */
var makeSentence = function (length) {
    var bottom = (0, tools_1.budgeByOdds)(15, 10, "down");
    var top = (0, tools_1.budgeByOdds)(20, 10, "up");
    length = Math.max(1, length || (0, tools_1.range)(bottom, top));
    var sentence = "".concat((0, tools_1.capitalizeFirstLetter)((0, fiction_word_1.makeWord)()), " ");
    for (var i = 1; i < length; i++) {
        sentence += "".concat((0, fiction_word_1.makeWord)(), " ");
    }
    return "".concat(sentence.trim(), ".");
};
exports.makeSentence = makeSentence;
/**
 * @description Generates a paragraph with a given length or a normally distributed number.
 * @param length - The given length of the paragraph in sentences.
 * @returns The generated paragraph.
 */
var makeParagraph = function (length) {
    var bottom = (0, tools_1.budgeByOdds)(2, 5, "down");
    var top = (0, tools_1.budgeByOdds)(6, 10, "up");
    length = Math.max(1, length || (0, tools_1.range)(bottom, top));
    var paragraph = (0, exports.makeSentence)();
    for (var i = 1; i < length; i++) {
        paragraph += "".concat((0, exports.makeSentence)(), " ");
    }
    return paragraph.trim();
};
exports.makeParagraph = makeParagraph;
