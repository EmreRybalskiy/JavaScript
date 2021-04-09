function Animal(name, age, color) {

	this.name = name;
	this.age = age;
	this.color = color;
	
	if (!new.target) {
		return new Animal(name,age,color);
	};
};

const rabbit = Animal('Name', 'Age', 'Color');
console.log(rabbit.name);
