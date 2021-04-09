const arr= [1,1,2,2,3,3,4,4,5,5];

Array.prototype.getUnique = function (){
	const newArr = arr.filter(function(item, i, arr){
		return arr.indexOf(item) === i;
	});
	return newArr;
};

const newArr = arr.getUnique();
console.log(newArr);

