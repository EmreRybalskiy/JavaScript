const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: false,
	e: 0
};

Object.prototype.getSum = function () {
	let sum = 0;
	for (const key of Object.values(obj)) {
		if (key) {
			sum += key;
		}
	};
	return sum;
};

Object.prototype.reversKey  = function () {
	let res = {};
  	Object.keys(obj).forEach(function(key){
		return res[obj[key]] = key;
	  });
  return res;
};

console.log(obj.getSum());
console.log(obj.reversKey());