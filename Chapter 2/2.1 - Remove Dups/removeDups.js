// Write code to remove duplicates from an unsorted linked list.

var LinkedList = function (key, value) {
	this.keyValuePair = [key, value];
	this.next = null;
};

LinkedList.prototype.insert = function (key, value) {
	if (this.next === null) this.next = new LinkedList(key, value);
	else this.next.insert(key, value);
};

LinkedList.prototype.find = function (key) {
	if (this.keyValuePair[0] === key) return this.keyValuePair[1];
	else if (this.next !== null) return this.next.find(key);
	else return null;
};

LinkedList.prototype.replace = function (key, value) {
	if (this.keyValuePair[0] === key) this.keyValuePair = [key, value];
	else return this.next.replace(key, value);
};

LinkedList.prototype.delete = function (key) {
	if (this.keyValuePair[0] === key) {
		// delete
	} else this.next.delete(key);
};

const removeDuplicates = (head) => {
	var ptr1 = head,
		ptr2 = null;

	/* Pick elements one by one */
	while (ptr1 !== null && ptr1.next !== null) {
		ptr2 = ptr1;

		/*
		 * Compare the picked element with rest of the elements
		 */
		while (ptr2.next !== null) {
			/* If duplicate then delete it */
			if (ptr1.keyValuePair[0] === ptr2.next.keyValuePair[0]) {
				/* sequence of steps is important here */
				ptr2.next = ptr2.next.next;
			} /* This is tricky */ else {
				ptr2 = ptr2.next;
			}
		}
		ptr1 = ptr1.next;
	}

	return head;
};

const printList = (node) => {
	while (node !== null) {
		console.log(`${node.keyValuePair[0]}, ${node.keyValuePair[1]}  `);
		node = node.next;
	}
};

var list = new LinkedList(1, 'one');
list.insert(2, 'two');
list.insert(3, 'three');
list.insert(1, 'one');
list.insert(1, 'one');
list.insert(2, 'two');
list.insert(3, 'three');
list.insert(4, 'four');
list.insert(4, 'four');

printList(list);
console.log();

var listNoDups = removeDuplicates(list);
printList(listNoDups);
