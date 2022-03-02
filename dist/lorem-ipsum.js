"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeParagraph = exports.makeSentence = void 0;
const fiction_word_1 = require("./fiction-word");
const tools_1 = require("./tools");
const makeSentence = (length) => {
    const bottom = (0, tools_1.budgeByOdds)(15, 10, "down");
    const top = (0, tools_1.budgeByOdds)(20, 10, "up");
    length = length || (0, tools_1.range)(bottom, top);
    if (length < 1)
        length = 1;
    let sentence = `${(0, tools_1.capitalizeFirstLetter)((0, fiction_word_1.makeWord)())} `;
    for (let i = 1; i < length; i++) {
        sentence += `${(0, fiction_word_1.makeWord)()} `;
    }
    return `${sentence.slice(0, -1)}.`;
};
exports.makeSentence = makeSentence;
const makeParagraph = (length) => {
    const bottom = (0, tools_1.budgeByOdds)(2, 5, "down");
    const top = (0, tools_1.budgeByOdds)(6, 10, "up");
    length = length || (0, tools_1.range)(bottom, top);
    if (length < 1)
        length = 1;
    let paragraph = makeSentence();
    for (let i = 1; i < length; i++) {
        paragraph += `${makeSentence()} `;
    }
    return paragraph.slice(0, -1);
};
exports.makeParagraph = makeParagraph;
