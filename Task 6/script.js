function getSum(...params) {
	let sum = 0;
	for (let i = 0; i < params.length; i++) {
		sum += params[i];
		console.log(params[i]);
	}
	console.log(sum);
};

getSum(1,2,3,4,5);