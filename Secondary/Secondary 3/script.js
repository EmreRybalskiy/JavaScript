function stringValidation(str) {
	if (typeof str === 'string') {
		if (str.length > 3) {
		  console.log('Больше чем 3');
		} else {
		  console.log('Ошибка. Мишимальная длина - 3');
		} 
  
	} else {
	  console.log('Ошибка. Не тот тип данных');
	} 
  };
  
  const result = stringValidation('test');