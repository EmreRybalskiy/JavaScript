function Calculator() {
	this.read = function () {
		this.value1 = +prompt('Первое значение', '');
		this.value2 = +prompt('Второе значение', '');
		if(isNaN(this.value1) && isNaN(this.value1)) {
			return this.read();
		}
	},
	this.setAction = function () {
		this.act = prompt('Что будем делать?','')
	},
	this.doAction = function () {
	    switch(this.act) {
			case '+':
				return this.sum();
			case '-':
				return this.min();
			case '*':
				return this.mul();
			case '/':
				return this.mol();
			default:
				alert('Не верный оператор')
		  }
	},
	this.sum = function() {
		return this.value1 + this.value2;
	},
	this.mul = function() {
		return this.value1 * this.value2;
	},
	this.min = function () {
		return this.value1 - this.value2;
	},
	this.mol = function () {
		return this.value1 / this.value2;
	}
};

const calculator = new Calculator();
calculator.read();
calculator.setAction();
const res = calculator.doAction();
console.log(res);
