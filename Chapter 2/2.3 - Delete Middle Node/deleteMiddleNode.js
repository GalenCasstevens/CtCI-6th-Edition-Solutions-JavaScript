// Implement an algorithm to delete a node in the middle (i.e., any node but the
// first and last node, not necessarily the exact middle) of a singly linked list,
// given only access to that node.

const LinkedList = require('../util/linkedList');
const printList = require('../util/printList');

let deleteMiddleNode = (node) => {
	if (node && node.next) {
		node.value = node.next.value;
		node.next = node.next.next;
	}
};

let list = new LinkedList();
for (let item of [1, 2, 3, 4, 5, 6]) {
	list.append(item);
}

printList(list.head);
deleteMiddleNode(list.head.next);
printList(list.head);
