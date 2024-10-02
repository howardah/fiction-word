"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = exports.capitalizeFirstLetter = exports.budgeByOdds = exports.theOdds = void 0;
function theOdds(percent) {
    var Odds = Math.floor(Math.random() * 100);
    return Odds < percent ? true : false;
}
exports.theOdds = theOdds;
var budgeByOdds = function (num, percent, direction) {
    var down = direction === "down";
    while (theOdds(percent))
        down ? num-- : num++;
    return num;
};
exports.budgeByOdds = budgeByOdds;
function range(bottom, top) {
    var min = Math.ceil(bottom);
    var max = Math.floor(top);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.range = range;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
