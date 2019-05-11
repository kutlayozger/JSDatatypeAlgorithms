


class Queue {
	constructor () {
		this.collection = [];
	}
	
	enqueue(item) {
		this.collection.push(item);
	}
	
	dequeue() {
		return this.collection.shift();
	}
	
	size() {
		return this.collection.length;
	}
	
	isEmpty() {
		return this.collection.length == 0;
	}
}


module.exports=Queue;