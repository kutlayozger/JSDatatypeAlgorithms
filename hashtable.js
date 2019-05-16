
function hash(s, max = 100) {
	let i = 0, n = 0;
	console.log("s:",s)
	s.split().forEach((c, i) => {
	    n += s.charCodeAt(i);
	});
	return n % max;
}

class HashTable {
	constructor() {
	}
}

HashTable.prototype.hash = hash;

module.exports = HashTable;