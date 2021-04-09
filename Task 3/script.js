const arr = [1, 2, 3, 0, 4, 5, 6];

let sum = 0;
let result = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (sum > 10) {
    result = i + 1;
    break;
  }
}

console.log(result);
