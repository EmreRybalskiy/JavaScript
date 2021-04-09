function getIndex(str, targetString) {
	return str.indexOf(targetString);
}

const index = getIndex('Hello, my name is', 'is'); // 15
console.log(index);

const index2 = getIndex('Hello, my name is', 'name'); // 10
console.log(index2);
