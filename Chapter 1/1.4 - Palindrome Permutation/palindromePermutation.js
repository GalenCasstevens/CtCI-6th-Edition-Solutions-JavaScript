// Given a string, write a function to determine if it is a permutation of a palindrome
// Tact Coa -> taco cat
// 0 1 2 3 4
let isPermutationOfPalindrome = (string) => {
    for (let i = 0; i < string.length; i++) {
        var regex = new RegExp(string[i], 'g');
        var count = (string.toLowerCase().match(regex)||[]).length;
        //

    }
};

var text = 'Taco Cat';
text = text.toLowerCase();

console.log(text[1]);
var regexA = new RegExp(text[1], 'g');
console.log((text.match(regexA).length));