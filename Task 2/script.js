const objectA = {
	a: 1,
	b: 2,
	c: 3,
	d: -10,
	e: -2,
	f: '1231'
};

function func() {
	let sum = 0;
	for (const key in this) {
		if (this[key] > 0 && typeof this[key] === 'number') {
			sum += this[key];
		}
	};
	return sum;
};

const result = func.bind(objectA);
console.log(result());