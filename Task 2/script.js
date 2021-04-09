let sum = 0;

function count(n) {
  for (let i = 0; i <= n; i++) {
    if (Number.isInteger(i)) {
      sum += i;
    }
  }
  return sum;
}

const result = count(10);
console.log(result);

function count(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + count(n - 1);
  }
}

console.log(count(10));
