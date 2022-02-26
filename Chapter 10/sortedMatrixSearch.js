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
	[15, 40, 50, 55],
	[20, 50, 55, 60],
];

let findElement = (matrix, element, rowRange, colRange) => {
	var m = matrix.length; // number of rows
	var n = matrix[0].length; // number of columns
	if (rowRange === undefined) rowRange = new Range(0, m);
	if (colRange === undefined) colRange = new Range(0, n);

	var midRow = Math.floor(rowRange.start + (rowRange.end - rowRange.start) / 2);
	var midCol = Math.floor(colRange.start + (colRange.end - colRange.start) / 2);
};
