const arr = ['Vasya', 'Petya', 'Alexey'];

function removeUser(arr, index) {
	const newArr = arr.splice(index, 1);
	console.log(newArr);
};

removeUser(arr, 1);
console.log(arr);
