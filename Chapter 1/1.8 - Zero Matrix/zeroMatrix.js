// Write an algorithm such that if an elemnt in an MxN matrix is 0, its
// entire row and column are set to 0

let zeroMatrix = (matrix) => {
	var rowContainsZero;
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i].includes(0)) rowContainsZero = true;
		for (let j = 0; j < matrix[0].length; j++) {
			if (rowContainsZero) matrix[i][j] = 0;
		}
		rowContainsZero = false;
	}
	return matrix;
};

let testMatrix = [
	[1, 0, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(testMatrix);
console.log(zeroMatrix(testMatrix));
