/*global describe, it */



	const Stack = require("../stack"),
	    Queue = require("../queue"),
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

	});
