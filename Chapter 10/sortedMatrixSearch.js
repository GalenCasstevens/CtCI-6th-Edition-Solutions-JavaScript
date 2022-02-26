// Given an M x N matrix in which each row and each column is sorted in ascending order,
// write a method to find an element.

class Range {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}
}

const matrix = [
	[0, 20, 25, 40],
	[10, 30, 35, 45],
	[15, 44, 51, 55],
	[20, 50, 55, 60],
	[21, 53, 60, 65],
];

let findElement = (matrix, element, rowRange, colRange) => {
	var m = matrix.length - 1; // max row index
	var n = matrix[0].length - 1; // max col index
	if (rowRange === undefined) rowRange = new Range(0, m);
	if (colRange === undefined) colRange = new Range(0, n);

	var midRow = Math.floor(rowRange.start + (rowRange.end - rowRange.start) / 2);
	var midCol = Math.floor(colRange.start + (colRange.end - colRange.start) / 2);

	if (
		(midRow === rowRange.start || midCol === colRange.start) &&
		element !== matrix[midRow][midCol]
	)
		return -1;
	else if (element === matrix[midRow][midCol]) return 1;
	else if (element < matrix[midRow][midCol])
		return findElement(
			matrix,
			element,
			new Range(0, midRow),
			new Range(0, midCol)
		);
	else
		return findElement(
			matrix,
			element,
			new Range(midRow, m),
			new Range(midCol, n)
		);
};

console.log(findElement(matrix, 60));
