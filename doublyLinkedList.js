//Created doublyLinkedList
// push/pop.shift/unshift
//insert/remove
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
class DoublyLinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}
	//1,2,3   4
	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	//1,2,-3-
	pop() {
		if (this.length === 0) return undefined;
		let temp = this.tail;
		this.tail = this.tail.prev;
		this.tail.next = null;
		temp.prev = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.null = null;
		}
		return this;
	}
	//1,2,3,4,5
	unshift(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	//1,2,3,4,5
	shift() {
		if (this.length === 0) return undefined;
		let temp = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			temp.next = null;
		}
		this.length--;
		return temp;
	}
	//1,2,3,4,5,6
	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let temp = this.head;
		if (index < this.length / 2) {
			for (i = 0; i < index; i++) {
				temp = temp.next;
			}
		} else {
			temp = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				temp = temp.prev;
			}
		}
		return temp;
	}

	set(index, value) {
		let temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		} else {
			return false;
		}
	}
	insert(index, value) {
		if (index === 0) return this.unshift(value);
		if (index === this.length) return this.push(value);
		if (index < 0 || index > this.length) return false;
		const newNode = new Node(value);
		let before = this.get(index - 1);
		let after = before.next;
		before.next = newNode;
		newNode.next = after;
		this.length++;
		return true;
	}
	/// 1,2,-3-,-4-,5,6
	remove(index) {
		if (index === 0) return this.shift();
		if (index === this.length) return this.pop();
		if (index < 0 || index > this.length) return false;
		let temp = this.get(index);
		temp.prev.next = temp.next;
		temp.next.prev = temp.prev;
		temp.prev = null;
		temp.next = null;
		this.length--;
		return temp;
	}
}

const newDoublyLinkedList = new DoublyLinkedList(4);
console.log(newDoublyLinkedList.push(5));
console.log(newDoublyLinkedList.push(6));
console.log(newDoublyLinkedList.get(2));
