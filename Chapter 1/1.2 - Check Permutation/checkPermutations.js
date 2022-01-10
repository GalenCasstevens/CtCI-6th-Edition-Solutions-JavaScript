// Given two strings, write a method to decide
// if one is a permutation of the other

// let isPermutation = (text1, text2) => {
//     if(text1.length != text2.length) return false;

//     var text1CharCount = {};
//     var text2CharCount = {};
//     for (let i = 0; i < text1.length; i++) {
//         var text1Char = text1[i];
//         var text2Char = text2[i];
//         if (text1CharCount[text1Char]) text1CharCount[text1Char]++;
//         else text1CharCount[text1Char] = 1;
//         if (text2CharCount[text2Char]) text2CharCount[text2Char]++;
//         else text2CharCount[text2Char] = 1;
//     }

//     for(let i = 0; i < text1.length; i++) {
//         var char = text1[i];
//         if (text1CharCount[char] != text2CharCount[char]) return false;
//     }

//     return true;
// };

// console.log(isPermutation('bacon', 'eggs'));
// console.log(isPermutation('dad', 'dad'));
// console.log(isPermutation('galen', 'legna'));

// Optimal Solution

let isPermutation = (stringOne, stringTwo) => {
    if (stringOne.length != stringTwo.length) return false;
    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
};

console.log(isPermutation('dad', 'dad'));
console.log(isPermutation('robot', 'tobor'));
console.log(isPermutation('joke', 'test'));