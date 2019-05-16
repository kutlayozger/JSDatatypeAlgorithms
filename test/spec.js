/*global describe, it */



	const Stack = require("../stack"),
	    Queue = require("../queue"),
	    LinkedList = require("../linkedlist"),
	    HashTable = require("../hashtable"),
		assert = require("assert");

    describe('data type tests', function () {
        it('Stacks', function () {
			var stack = new Stack();
			stack.push("a");
			stack.push("b");
			assert.equal(stack.size(), 2, "size");
			assert.equal(stack.peek(), "b", "peek");
			assert.equal(stack.pop(), "b", "peek");
			assert.equal(stack.size(), 1, "size");
		});
        it('Queue', function () {
			var queue = new Queue();
			assert.equal(queue.isEmpty(), true, 'isEmpty');
			queue.enqueue("a");
			queue.enqueue("b");
			assert.equal(queue.size(), 2, "size");
			//assert.equal(queue.peek(), "b", "peek");
			assert.equal(queue.dequeue(), "a", "dequeue");
			assert.equal(queue.size(), 1, "size");
		});
        it('LinkedList', function () {
			var linkedList = new LinkedList();
			assert.equal(linkedList.size(), 0, "size");
			assert.equal(linkedList.first(), null, "first");
			linkedList.append(3);
			assert.equal(linkedList.size(), 1, "size");
			linkedList.delete(3);
			assert.equal(linkedList.size(), 0, "size");
		});
        it('HashTable', function () {
			var hashtable = new HashTable();
			console.log(hashtable.hash("an example"));
		});

	});
