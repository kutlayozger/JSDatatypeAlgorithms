

class Stack {
	constructor () {
		this.collection = [];
	}
	
	push(item) {
		this.collection.push(item);
	}
	
	pop() {
		return this.collection.pop();
	}
	
	size() {
		return this.collection.length;
	}
	
	peek() {
		if (this.collection.length === 0) {
			return null;
		}
		return this.collection[this.collection.length - 1];
	}
}


module.exports=Stack;