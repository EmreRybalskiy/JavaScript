function arrayTesting(arr) {
	const checkValue = arr.some(function(el){
		return el;
	});

	if (checkValue) {
		return 'Нашли true значение';
	} else {
		return 'Значение true не найдено';
	}
};

const haveTrueValue = arrayTesting([0, false, null, 1]);
const dontHaveTrueValue = arrayTesting([0, false, null, 0]);

console.log(haveTrueValue);
console.log(dontHaveTrueValue);