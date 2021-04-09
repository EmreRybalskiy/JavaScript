const arr = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let sum = 0;

arr.forEach(function(item){
	for (let i of item) {
		if (typeof i === 'number' && i % 2 === 0) {
			sum += i;
		}
	}
});

console.log(sum);
