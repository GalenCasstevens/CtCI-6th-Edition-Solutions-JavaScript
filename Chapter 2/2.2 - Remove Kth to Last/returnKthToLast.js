// Implement an algorithm to return the kth to last element of a singly linked list.

var LinkedList = function (key, value) {
	this.keyValuePair = [key, value];
	this.next = null;
};

LinkedList.prototype.insert = function (key, value) {
	if (this.next === null) this.next = new LinkedList(key, value);
	else this.next.insert(key, value);
};

const getKthToLastElementOfLinkedList = (head, k) => {
	var numNodes = 1,
		ptr1 = head,
		ptr2 = null;

	while (ptr1.next) {
		numNodes++;
		if (ptr2) ptr2 = ptr2.next;
		ptr1 = ptr1.next;
		if (!ptr2 && numNodes > k) ptr2 = head;
	}

	if (k === 0) return ptr1; // if k=0, return last element (ptr1 in this case)
	if (!ptr2) return -1; // k value is greater than total number of nodes in the list

	return ptr2;
};

var list = new LinkedList(1, 'one');
list.insert(2, 'two');
list.insert(3, 'three');
list.insert(4, 'four');
list.insert(5, 'five');
list.insert(6, 'six');
list.insert(7, 'seven');
list.insert(8, 'eight');
list.insert(9, 'nine');

console.log(getKthToLastElementOfLinkedList(list, 1));
