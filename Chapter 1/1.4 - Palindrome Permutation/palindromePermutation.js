// Given a string, write a function to determine if it is a permutation of a palindrome
// Tact Coa -> taco cat

let isPermutationOfPalindrome = (string) => {
    var middleChar = false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            var regex = new RegExp(string[i].toLowerCase(), 'g');
            var count = (string.toLowerCase().match(regex) || []).length;
            if (count % 2 !== 0 && middleChar === false) middleChar = true;
            else if (count % 2 !== 0 && middleChar) return false;
        }
    }
    return true;
};

var text = 'Ta ct Coa ';
var text2 = 'redivider';
var text3 = 'deifiedf';

console.log(isPermutationOfPalindrome(text3));