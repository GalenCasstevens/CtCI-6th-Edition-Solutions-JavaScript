// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to
// determine if they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false

let isOneAway = (stringOne, stringTwo) => {
    if (Math.abs(stringOne.length - stringTwo.length) > 1) return false;
};

let insertChar = (str, char, index) => {
    if (index === 0) return char + str;
    return str.slice(0, index) + char + str.slice(index);
};

let removeChar = (str, index) => {
    if (index === 0) return str.slice(1);
    return str.slice(0, index) + str.slice(index + 1);
};

let replaceChar = (str, char, index) => {
    if (index === 0) return char + str.slice(1);
    return str.slice(0, index) + char + str.slice(index + 1);
};