class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		let node = new Node(value);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	}

	prepend(value) {
		let node = new Node(value);
		node.next = this.head;
		this.head = node;
	}

	pop() {
		let cur = this.head;

		// check if one or no item exists
		if (!cur) return null;
		if (!cur.next) {
			this.head = null;
			return cur;
		}

		this.head = this.head.next;
		return cur;
	}

	head() {
		return this.head;
	}
}

module.exports = LinkedList;
