const arr = [3, 5, 12, 9, 23, 93, 17];
let sum = 0;

arr.forEach(function(el){
	if (el > 2 && el < 20) {
		sum += el;
	}
}); 

console.log(sum);