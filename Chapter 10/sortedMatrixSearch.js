// Given an M x N matrix in which each row and each column is sorted in ascending order,
// write a method to find an element.

const matrix = [
	[10, 15, 25, 44],
	[11, 16, 30, 50],
	[15, 20, 33, 51],
	[20, 23, 44, 555],
	[34, 30, 444, 777],
];

let findElement = (matrix, element, minRowInd, maxColInd) => {
	if (minRowInd === undefined) minRowInd = 0;
	if (maxColInd === undefined) maxColInd = matrix[0].length - 1;
	if (maxColInd < 0 || minRowInd > matrix.length - 1) return -1;
	var topRightVal = matrix[minRowInd][maxColInd];

	if (topRightVal === element) return 1;
	else if (element < topRightVal) {
		maxColInd--;
		return findElement(matrix, element, minRowInd, maxColInd);
	} else if (element > topRightVal) {
		minRowInd++;
		return findElement(matrix, element, minRowInd, maxColInd);
	}
};

console.log(findElement(matrix, 51));
