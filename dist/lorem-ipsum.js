"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeParagraph = exports.makeSentence = void 0;
var fiction_word_1 = require("./fiction-word");
var tools_1 = require("./tools");
var makeSentence = function (length) {
    var bottom = (0, tools_1.budgeByOdds)(15, 10, "down");
    var top = (0, tools_1.budgeByOdds)(20, 10, "up");
    length = length || (0, tools_1.range)(bottom, top);
    if (length < 1)
        length = 1;
    var sentence = "".concat((0, tools_1.capitalizeFirstLetter)((0, fiction_word_1.makeWord)()), " ");
    for (var i = 1; i < length; i++) {
        sentence += "".concat((0, fiction_word_1.makeWord)(), " ");
    }
    return "".concat(sentence.slice(0, -1), ".");
};
exports.makeSentence = makeSentence;
var makeParagraph = function (length) {
    var bottom = (0, tools_1.budgeByOdds)(2, 5, "down");
    var top = (0, tools_1.budgeByOdds)(6, 10, "up");
    length = length || (0, tools_1.range)(bottom, top);
    if (length < 1)
        length = 1;
    var paragraph = makeSentence();
    for (var i = 1; i < length; i++) {
        paragraph += "".concat(makeSentence(), " ");
    }
    return paragraph.slice(0, -1);
};
exports.makeParagraph = makeParagraph;
