function sayHello(name = '') {
	if (name) {
		console.log('Привет, ' + name);
	} else {
		console.log('Привет, гость');
	}
};

sayHello('Василий');
