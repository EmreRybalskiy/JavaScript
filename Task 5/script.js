const sum = document.getElementById("sum");
const inp = document.getElementById("inp");
const onlyLi = document.getElementsByClassName("li");

sum.addEventListener("click", function () {
  let result = 0;
  let arr = [];
  for (const i of onlyLi) {
    if (Number(i.innerText)) {
      arr.push(i.innerText);
      result += +i.innerText;
      inp.value = `${arr.join("+")} = ${result}`;
    };
  };
});
