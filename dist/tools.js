"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = exports.capitalizeFirstLetter = exports.budgeByOdds = exports.theOdds = void 0;
/**
 * @description Returns true if the odds are in favor of the event.
 * @param percent - The percentage chance of the event happening.
 * @returns True if the odds are in favor of the event, false otherwise.
 */
function theOdds(percent) {
    var Odds = Math.floor(Math.random() * 100);
    return Odds < percent ? true : false;
}
exports.theOdds = theOdds;
/**
 * @description Bends a number by a percentage chance in a given direction.
 * @param num - The number to bend.
 * @param percent - The percentage chance of bending the number.
 * @param direction - The direction to bend the number.
 * @returns The bent number.
 */
var budgeByOdds = function (num, percent, direction) {
    var down = direction === "down";
    while (theOdds(percent))
        down ? num-- : num++;
    return num;
};
exports.budgeByOdds = budgeByOdds;
/**
 * @description Returns a random number between two numbers.
 * @param bottom - The bottom of the range.
 * @param top - The top of the range.
 * @returns A random number between the bottom and top.
 */
function range(bottom, top) {
    var min = Math.ceil(bottom);
    var max = Math.floor(top);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.range = range;
/**
 * @description Capitalizes the first letter of a string.
 * @param string - The string to capitalize.
 * @returns The capitalized string.
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
