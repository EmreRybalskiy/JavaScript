let arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

let checkNumber = arr.filter(function(element) {
	if (typeof element === 'number') {
		return true;
	} else {
		return false;
	}
});

console.log(checkNumber);