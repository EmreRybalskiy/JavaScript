let step = 0;
const count = setInterval(() => {
  step++;
  console.log("Прошло " + step + " сек.");
  if (step === 5) {
    clearInterval(count);
  }
}, 1000);
