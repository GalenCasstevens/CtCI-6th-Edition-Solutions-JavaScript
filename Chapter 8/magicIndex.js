// A magic index in an array[A...n-1] is defined to be an index such that A[i] = i;
// Given a sorted array of distinct integers, write a method to find a magic index,
// if one exists, in array A.
//
// What if the values are not distinct?

let array = [0, 10, 20, 22, 24, 25];
let array2 = [55, 70, 94, 100, 120];
let array3 = [-55, -45, -35, -15];
let array4 = [-55, -45, -35, 3];
let array5 = [-1, 0, 1, 2, 3, 5];

const getMagicIndex = (nums, start, end) => {
	if (start === undefined) start = 0;
	if (end === undefined) end = nums.length - 1;

	mid = Math.floor(start + (end - start) / 2);

	if (mid === start && nums[mid] !== mid && nums[end] !== end) return -1;
	else if (nums[mid] === mid) return mid;
	else if (nums[end] === end) return end;
	else if (mid < nums[mid]) return getMagicIndex(nums, start, mid);
	else return getMagicIndex(nums, mid, end);
};

console.log(getMagicIndex(array), 0);
console.log(getMagicIndex(array2), -1);
console.log(getMagicIndex(array3), -1);
console.log(getMagicIndex(array4), 3);
console.log(getMagicIndex(array5), 5);
