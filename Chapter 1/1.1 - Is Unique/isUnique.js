// Implement an algorithm to determine if a string has all unique characters
// What if you cannot use data structures?

let isUnique = (text) => {
    for (let i = 0; i < text.length; i++) {
        for (j = i + 1; j < text.length; j++)
            if (text[i] === text[j]) return false;
    }
    return true;
}

console.log(isUnique('Bacon'));
console.log(isUnique('Rebecca'));
console.log(isUnique('Dragon'));
console.log(isUnique('Eggs'));