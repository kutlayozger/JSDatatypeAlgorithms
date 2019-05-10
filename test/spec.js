/*global describe, it */



	const Stack = require("../stack"),
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
	});
