function Nums(...args) {
  this.args = args;
};

Nums.prototype.getSum = function () {
    let sum = 0;
    this.args.forEach(function(item){
      if(Number.isInteger(item)) {
        sum += item;
      };
    });
    return sum;
};

Nums.prototype.myFilterReverse = function () {
    const filtered = this.args.filter(function(item){
      return Number.isInteger(item);
    });
    const resArr = [];
    for (let i = filtered.length; i > 0; i--) {
        resArr.push(filtered.pop());
    };
    return resArr;
};

const test = new Nums(1,2,3,5.5,2.2,'2',null, undefined);
console.log(test);

console.log(test.getSum());
console.log(test.myFilterReverse());