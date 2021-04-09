const arr = [1, 2, 3, 0, 4, 5, 6];

const result = arr.reduceRight((accumulator, curr, index) => {
	if (index > arr.lastIndexOf(0)) {
		return accumulator + curr;
	} else {
		return accumulator;
	}
}, 0);

console.log(result);

