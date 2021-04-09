const count = () => {
	const userNumber = +prompt('Введите число', '');
	let sum = 0;

	if (userNumber) {
		for (let i = 1; i <= userNumber; i++ ) {
			sum += i ** 2;
		};
		
		console.log(sum);

	} else {
		alert('Вы ввели не число');
	};
};

count();
