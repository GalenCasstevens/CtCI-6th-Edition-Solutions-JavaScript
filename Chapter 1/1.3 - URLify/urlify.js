// Write a method to replace all spaces in a string with '%20'. You may
// assume that the string has sufficient space at the end to hold the
// additional characters, and that you are given the "true" length of
// string. (Note: If implementing in Java, please use a character array
// so that you can perform this operation in place).

let urlify = (string) => {
    var result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') result += string[i];
        else result += '%20';
    }
    return result;
};

console.log(urlify('Just some text'));
console.log(urlify('Trailing space example  '));
console.log(urlify('  Leading and trailing '));
console.log(urlify('NoSpace'));