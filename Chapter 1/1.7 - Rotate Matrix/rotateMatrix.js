// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this in place>

let rotateMatrix = (matrix) => {
    var result = [];
    
    for (let i = 0; i < matrix.length; i++) {
        result[i] = matrix[i].slice();
        for (let j = 0; j < matrix[0].length; j++) {
            result[i][j] =  matrix[matrix.length - 1 - j][i]
        }
    }

    return result; 
}; 

var matrixOne = [
    [1, 2],
    [3, 4]
];

var matrixTwo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var matrixThree = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(matrixThree);
console.log(rotateMatrix(matrixThree));
console.log(matrixTwo);
console.log(rotateMatrix(matrixTwo));