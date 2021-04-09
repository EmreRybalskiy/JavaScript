// 1й способ
function getSum(num1, num2) {
	return num1 + num2;
}
const result = getSum(5,10);
console.log(result);


// 2й способ
let arrowFunc = (arg, arg2) => arg + arg2;

const result2 = arrowFunc(5, 15);
console.log(result2);