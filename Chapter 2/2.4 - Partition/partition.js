// Write code to partition a linked list around a value x, such that all nodes less than
// x come before all nodes greater than or equal to x. If x is contained within the list,
// the values of x only need to be after the elements less than x (see below). The partition
// element x can appear anywhere in the "right partition"; it does not need to appear between
// the left and right partitions.
// EXAMPLE
// Input:  3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

let LinkedList = require('../util/linkedList');
let printList = require('../util/printList');

let partition = (head, x) => {
	var result = new LinkedList();
	var ptr = head;

	while (ptr) {
		if (!result.head) result.append(ptr.value);
		else if (ptr.value < x) result.prepend(ptr.value);
		else result.append(ptr.value);

		ptr = ptr.next;
	}

	return result;
};

let list = new LinkedList();
for (let item of [3, 5, 8, 5, 10, 2, 1]) {
	list.append(item);
}

printList(list.head);
var partitionedList = partition(list.head, 5);
printList(partitionedList.head);
