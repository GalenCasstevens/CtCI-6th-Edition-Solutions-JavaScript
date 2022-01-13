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

let isPermutationOfPalindrome2 = (string) => {
    var sanitized = string.toLowerCase().split(' ').join('');
    var freq = new Map();
    
    for (let i = 0; i < sanitized.length; i++) {
        let char = sanitized.charAt(i);
        let prevFreq = freq.get(char) || 0;
        freq.set(char, prevFreq + 1);
    }

    var oddCount = 0;
    
    for (let [char, count] of freq) {
        if(count % 2 !== 0) oddCount++;
    }

    return oddCount < 2;
};

var text = 'Ta ct Coa ';
var text2 = 'redivider';
var text3 = 'deifiedfxz';

console.log(isPermutationOfPalindrome2(text3));