"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordGen = void 0;
const fiction_word_1 = require("./fiction-word");
function wordGen(length) {
    return (0, fiction_word_1.makeNewWord)(length);
}
exports.wordGen = wordGen;
