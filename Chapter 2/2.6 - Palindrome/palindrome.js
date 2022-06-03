// Implement a function to determine if a linked list is a palindrome.

let LinkedList = require('../util/linkedList');

let isStrEven = (str) => str.length % 2 == 0;

let isPalindrome = (list) => {
	var ptr = list.head,
		text = '';

	while (ptr) {
		text += ptr.value;
		ptr = ptr.next;
	}

	for (let i = 0; i < text.length; i++) {
		var oppInd = text.length - (i + 1);
		if (!isStrEven(text) && i !== text.length / 2 - 1) {
			if (text.charAt(i) !== text.charAt(oppInd)) return false;
		} else if (isStrEven(text) && text.charAt(i) !== text.charAt(oppInd))
			return false;
	}

	return true;
};

let list = new LinkedList();
for (let item of ['r', 'a', 'c', 'e', 'c', 'a', 'r']) {
	list.append(item);
}
let list2 = new LinkedList();
for (let item of ['h', 'a', 'n', 'n', 'a', 'h']) {
	list2.append(item);
}
let list3 = new LinkedList();
for (let item of ['r', 'a', 'i', 'n']) {
	list3.append(item);
}
console.log(isPalindrome(list)); // true
console.log(isPalindrome(list2)); // true
console.log(isPalindrome(list3)); // false
