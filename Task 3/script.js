const person = {
	name: 'Vlad',
	lol: 22,
	kek: '23'
};

const person1 = {
    age: 1
};

function setProto (currentObj, protoObj) {
	currentObj.__proto__ = protoObj;
    console.log(currentObj);
};

setProto(person1, person);
