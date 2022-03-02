"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fiction_word_1 = require("./fiction-word");
exports.default = {
    wordGen: function wordGen(length) {
        return (0, fiction_word_1.makeNewWord)(length);
    },
};
