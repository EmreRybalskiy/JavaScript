const person = {
	getName() {
	  if ('name' in this) {
		console.log('name:', this.name);
	  }
	},
	
	setName(name) {
	  this.name = name;
	},

	getAge() {
	  if ('age' in this) {
		console.log('age:', this.age);
	  }
	},

	setAge(age) {
		this.age = this.ageValidation(age);
	},

	ageValidation(validAge) {
	  if (validAge > 18) {
		  return validAge;
	  } else {
		return 'Validation Error';
	  }
	}
  };
  
  const person1 = {
	__proto__: person
  };
  
  person1.setName('Andrey');
  person1.getName();
  
  person1.setAge(15);
  person1.getAge();