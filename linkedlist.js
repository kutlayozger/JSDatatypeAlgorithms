
class Node {
    constructor (value, next = null) {
	    this.value = value;
		this.next = next;
	}
}

class LinkedList {
    constructor () {
       this.head = null;
	   this.tail = null;
    }
    append(value) {
        var newNode = new Node(value);
	    if (!this.head) {
	        this.head = newNode;
		    this.tail = newNode;
		} else {
		    this.tail.next = newNode;
			this.tail = newNode;
		}
		return this;
    }
	delete(value) {
	    var selectNode = this.head, prev = null;
		while (selectNode && selectNode.value !== value) {
		    prev = selectNode;
		    selectNode = selectNode.next;
		}
		if (selectNode) {
		    if (prev) {
			    prev.next = selectNode.next;
			}
			if (this.head.value === value) {
			   this.head = selectNode.next;
			}
			if (this.tail.value === value) {
			   this.tail = prev;
			}
		}
	}
	first() {
		return this.head;
	}
	size() {
		var count = 0, selectNode = this.head;
		while (selectNode) {
			count += 1;
			selectNode = selectNode.next;
		}
		return count;
	}
}

module.exports=LinkedList;