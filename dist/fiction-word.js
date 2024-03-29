"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWord = void 0;
const tools_1 = require("./tools");
function makeWord(wLength) {
    // var longOrShort = Math.round(Math.random()) ? 12 : 6,
    var lengthOfWord = 1, //Math.ceil(Math.random() * longOrShort) + 1,
    newWord = "", wordEnder = true, wordLength = "flex", maybeDontEndWith = {
        i: 70,
        u: 70,
        a: 30,
        o: 50,
        j: 90,
        q: 30,
        " ": 30,
    };
    if (wLength !== undefined) {
        lengthOfWord = wLength;
        wordLength = "exact";
    }
    else {
        while (wordEnder) {
            var shortener = 100 - lengthOfWord * 10;
            shortener = shortener < 5 ? 5 : shortener;
            // if(shortener)
            lengthOfWord++;
            (0, tools_1.theOdds)(shortener) ? (wordEnder = true) : (wordEnder = false);
        }
    }
    // console.log(lengthOfWord);
    while (newWord.length < lengthOfWord) {
        newWord += giveMeALetter(newWord, lengthOfWord);
        if (newWord.length >= lengthOfWord) {
            var lastChar = newWord.charAt(newWord.length - 1);
            if (lastChar in maybeDontEndWith) {
                var sliceC = -1;
                if (lastChar === " ")
                    sliceC = -2;
                if ((0, tools_1.theOdds)(maybeDontEndWith[lastChar]))
                    newWord = newWord.slice(0, sliceC);
            }
            if (!/[aeiou]/g.test(newWord)) {
                newWord = "";
            }
            else if (wordLength === "exact" && newWord.length > lengthOfWord) {
                newWord = "";
            }
        }
    }
    if (/eee/g.test(newWord))
        newWord = newWord.replace(/eee/g, "ee");
    if (/ii/g.test(newWord))
        newWord = newWord.replace(/ii/g, "i");
    if (/y[b, t, k, r, z]$/.test(newWord) && (0, tools_1.theOdds)(90))
        newWord = newWord.replace(/y([^y]*)$/, "i" + "$1");
    return newWord.trim();
}
exports.makeWord = makeWord;
function giveMeALetter(newWord, wordLength) {
    var prefixes = ["str", "pre", "dia", "gh", "wh", "psy"], suffixes = ["tion", "ing", "ies", "ed", "er", "ght", "gh", "ck", "ff", "que", "nd"], vowels = ["a", "e", "i", "o", "u", "y"], consonants = [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "x",
        "z",
        "w",
        "y",
    ], marked = ["z", "x", "j"], consonantCluster = [
        "tr",
        "sc",
        "th",
        "sh",
        "ch",
        "br",
        "bl",
        "cl",
        "cr",
        "ff",
        "que",
        "qu",
        "dr",
        "sw",
    ], dipthong = ["ee", "ea", "io", "oo", "ou", "eau"], lastLetter = newWord.charAt(newWord.length - 1), letterBefore = newWord.charAt(newWord.length - 2), possibles = [], checker = false, chosenLetter = "";
    if (vowels.includes(lastLetter) && !(lastLetter === "y" && newWord.length === 1)) {
        if (wordLength - newWord.length <= 2) {
            possibles = possibles.concat(consonants, consonants, suffixes);
            if (/[e,a,i,o,u]{3}$/.test(newWord)) {
                possibles = rl(possibles, ["ies", "ed", "er", "ing"]);
            }
            else if (/[e,a,i,o,u]{2}$/.test(newWord)) {
                possibles = rl(possibles, ["ies"]);
                if (!/[e]{2}$/.test(newWord))
                    possibles = rl(possibles, ["ed", "er", "ing"]);
            }
        }
        else {
            possibles = possibles.concat(consonantCluster, consonants);
        }
    }
    else if (consonants.includes(lastLetter)) {
        possibles = possibles.concat(vowels, vowels, dipthong);
        if (wordLength - newWord.length <= 2)
            possibles = possibles.concat(vowels, vowels);
    }
    else {
        vowels = rl(vowels, ["y"]);
        possibles = possibles.concat(vowels, consonants);
        if (wordLength > 3)
            possibles = possibles.concat(prefixes, consonantCluster);
        if ((0, tools_1.theOdds)(20))
            possibles = possibles.concat(dipthong);
        possibles = rl(possibles, ["ff"]);
    }
    switch (lastLetter) {
        case "i":
            if ((0, tools_1.theOdds)(70))
                possibles = rl(possibles, ["w", "q", "x"]);
            break;
        case "q":
            if (newWord.length !== wordLength - 1 || wordLength == 2) {
                if ((0, tools_1.theOdds)(90))
                    possibles = ["u"];
            }
            else {
                return " ";
            }
            break;
        case "u":
            if (letterBefore === "q" && (0, tools_1.theOdds)(60))
                possibles = ["e"];
            break;
        case "y":
            possibles = rl(possibles, ["y"]);
            break;
        default:
            break;
    }
    chosenLetter = possibles[Math.floor(Math.random() * possibles.length)];
    checker = false;
    switch (chosenLetter) {
        case "eau":
            if ((0, tools_1.theOdds)(40))
                possibles = rl(possibles, ["eau"]);
            checker = true;
            break;
        case "q":
        case "qu":
        case "que":
            if ((0, tools_1.theOdds)(60)) {
                checker = true;
            }
            if (/q/g.test(newWord) && (0, tools_1.theOdds)(93)) {
                possibles = rl(possibles, ["q", "que", "qu"]);
                checker = true;
            }
            if (chosenLetter === "que" && wordLength < 5 && (0, tools_1.theOdds)(93)) {
                possibles = rl(possibles, ["que"]);
                checker = true;
            }
            break;
        case "y":
            if ((0, tools_1.theOdds)(60)) {
                checker = true;
            }
            break;
        default:
            break;
    }
    if (chosenLetter === letterBefore) {
        if ((0, tools_1.theOdds)(60)) {
            possibles = rl(possibles, [chosenLetter]);
        }
        checker = true;
    }
    if (marked.includes(chosenLetter) && (0, tools_1.theOdds)(80)) {
        var re = new RegExp(chosenLetter, "g");
        if ((0, tools_1.theOdds)(60)) {
            possibles = rl(possibles, marked);
        }
        if (re.test(newWord) && (0, tools_1.theOdds)(98)) {
            possibles = rl(possibles, [chosenLetter]);
        }
        checker = true;
    }
    if (checker) {
        if (chosenLetter !== letterBefore && !marked.includes(chosenLetter))
            checker = false;
        chosenLetter = possibles[Math.floor(Math.random() * possibles.length)];
    }
    return chosenLetter !== undefined ? chosenLetter : "";
}
function rl(arr, letter) {
    for (var i = 0; i < arr.length; i++) {
        if (letter.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
