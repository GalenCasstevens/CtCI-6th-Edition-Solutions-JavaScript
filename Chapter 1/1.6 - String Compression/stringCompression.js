// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not
// become smaller than the original string, your method should return the original string. You can
// assume the string has only uppercase and lowercase letters (a-z).

let compressString = (str) => {
    var origLength = str.length;
    var compressedString = '';
    var charPattern = str.charAt(0);
    var counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (charPattern !== str.charAt(i)) {
            compressedString += charPattern + counter;
            charPattern = str.charAt(i);
            counter = 0;
        }
        counter++;
    }
    compressedString += charPattern + counter;
    if (origLength <= compressedString.length) return str;
    return compressedString;
};

console.log(compressString('aabcccccaaa'));
console.log(compressString('aabbcc'))