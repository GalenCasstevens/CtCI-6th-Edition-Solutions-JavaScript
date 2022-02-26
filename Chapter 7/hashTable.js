// Design and implement a hash table which uses chaining (linked lists) to handle collisions.

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
	else if (this.next !== null) this.next.find(key, value);
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

var getHash = function (key, limit) {
	if (typeof key !== 'string') throw 'error, key not a string';
	else {
		var result = 0;
		for (var i = 0; i < key.length; i++) {
			result += key[i];
		}
		return result % limit;
	}
};

var HashTable = function () {
	this.array = [];
	this.limit = 8;
};

HashTable.prototype.insert = function (key, value) {
	var hash = getHash(key, this.limit);
	if (this.array[hash] === undefined)
		this.array[hash] = new LinkedList(key, value);
	else this.array[hash].insert(key, value);
};

HashTable.prototype.retrieve = function (key) {
	var hash = getHash(key, this.limit);
	if (this.array[hash] === undefined) throw 'key not found';
	else return this.array[hash].find(key);
};

HashTable.prototype.replace = function (key, value) {
	var hash = getHash(key, this.limit);
	if (this.array[hash] === undefined) throw 'key not found';
	else this.array[hash].replace(key, value);
};

var ht = new HashTable();
ht.insert('242341', 'Cracking the Coding Interview');
ht.insert('544214', 'JavaScript: The Good Parts');
console.log(ht.retrieve('544214'));
ht.replace('544214', "The Complete Software Developer's Career Guide");
console.log(ht.retrieve('544214'));
