"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fiction_word_1 = require("./fiction-word");
const lorem_ipsum_1 = require("./lorem-ipsum");
const tools_1 = require("./tools");
exports.default = {
    word: (length) => (0, tools_1.capitalizeFirstLetter)((0, fiction_word_1.makeWord)(length)),
    sentence: lorem_ipsum_1.makeSentence,
    paragraph: lorem_ipsum_1.makeParagraph,
};
