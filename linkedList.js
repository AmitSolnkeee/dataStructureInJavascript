//Created Linkedlist
//pushed//popped//shift//unshift value from it
// get and set the value of any element based on index no.
//insert and remove element from a linkedList
//reverse a linkedList

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let temp = this.head;
		let pre = this.head;

		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}
		this.tail = pre;
		this.tail.next = null;
		this.length--;
		if (this.lenghth === 0) {
			this.head = null;
			this.tail = null;
		}
		return temp;
	}

	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (!this.head) return undefined;
		let temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		if (this.length == 0) {
			this.temp = null;
		}
		return temp;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}
		return temp;
	}

	set(index, value) {
		let temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		}
		return false;
	}

	insert(index, value) {
		const newNode = new Node(value);
		if (index === 0) return this.unshift(value);
		if (index === this.length) return this.push(value);
		if (index < 0 || index >= this.length) return false;
		let temp = this.get(index - 1);
		newNode.next = temp.next;
		temp.next = newNode;
		this.length++;
		return this;
	}
	//0,1,2,3,4,5
	remove(index) {
		if (index === 0) return this.shift();
		if (index === this.length) return this.pop();
		if (index < 0 || index >= this.length) return false;

		const before = this.get(index - 1);
		const temp = before.next;
		before.next = temp.next;
		temp.next = null;
		this.length--;
		return temp;
	}
	//1,2,3,4,5
	reverse() {
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		let next = temp.next;
		let pre = null;
		for (let i = 0; i < this.length; i++) {
			next = temp.next;
			temp.next = pre;
			pre = temp;
			temp = next;
		}
		return this;
	}
}
const newLinkedList = new LinkedList(4);
console.log(newLinkedList);
console.log(newLinkedList.push(7));
console.log(newLinkedList.push(13));
console.log(newLinkedList.push(15));
console.log(newLinkedList.reverse());
console.log(newLinkedList);
