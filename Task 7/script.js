const inp = document.getElementById("inp");
const button = document.getElementById("btn");
const circle = document.getElementById("circle");

inp.style.height = "30px";
inp.style.fontSize = "20px";

button.style.background = "#DEB887";
button.style.width = "100px";
button.style.height = "37px";
button.style.borderRadius = "15px";
button.style.fontSize = "20px";
button.innerText = "Start";
button.style.marginLeft = "8px";
button.style.cursor = "pointer";

circle.style.background = "red";
circle.style.width = "70px";
circle.style.height = "70px";
circle.style.marginTop = "20px";
circle.style.borderRadius = "50%";

button.addEventListener("click", () => {
  if (inp.value < 600 && inp.value > 0) {
    circle.style.marginLeft = `${inp.value}px`;
    circle.style.transition = "3s";
  } else if (inp.value > 600 || inp.value < 0) {
    inp.value = "Error";
  } else {
    inp.value = "";
  }
});
