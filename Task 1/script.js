1

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
	b = c;
	console.log(c);
  }
  return b;
}
fib(20)

2

function fib(n) {
	if (n <= 1) {
		return n;
	} else {
		return fib(n - 1) + fib(n - 2)
	}
}

console.log(fib(20));
