"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paragraph = exports.sentence = exports.word = void 0;
var fiction_word_1 = require("./fiction-word");
var lorem_ipsum_1 = require("./lorem-ipsum");
var tools_1 = require("./tools");
var word = function (length) { return (0, tools_1.capitalizeFirstLetter)((0, fiction_word_1.makeWord)(length)); };
exports.word = word;
exports.sentence = lorem_ipsum_1.makeSentence;
exports.paragraph = lorem_ipsum_1.makeParagraph;
exports.default = {
    word: exports.word,
    sentence: exports.sentence,
    paragraph: exports.paragraph,
};
