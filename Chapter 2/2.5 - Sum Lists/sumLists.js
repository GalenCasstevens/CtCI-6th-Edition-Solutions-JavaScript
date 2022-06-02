// You have two numbers represented by a linked list, where each node contains a
// single digit. The digits are stored in reverse order, such that the 1's digit
// is at the head of the list. Write a function that adds the two numbers and
// returns the sum as a linked list.

let LinkedList = require('../util/linkedList');
let printList = require('../util/printList');

let sumLists = (list1, list2) => {
	var num1 = '',
		num2 = '',
		ptr1 = list1.head,
		ptr2 = list2.head,
		sum,
		result = new LinkedList();

	while (ptr1) {
		num1 = num1.padStart(num1.length + 1, ptr1.value);
		ptr1 = ptr1.next;
	}

	while (ptr2) {
		num2 = num2.padStart(num2.length + 1, ptr2.value);
		ptr2 = ptr2.next;
	}

	sum = (parseInt(num1) + parseInt(num2)).toString();

	for (let i = 0; i < sum.length; i++) {
		result.append(parseInt(sum.charAt(i)));
	}

	return result;
};

let list1 = new LinkedList();
for (let item of [7, 1, 6]) {
	list1.append(item);
}
let list2 = new LinkedList();
for (let item of [5, 9, 2]) {
	list2.append(item);
}
// Expected output: 912

printList(sumLists(list1, list2).head);
