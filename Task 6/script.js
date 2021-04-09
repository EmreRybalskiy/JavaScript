const button = document.getElementById("btn");
const text = document.getElementById("text");

button.style.width = "250px";
button.style.height = "25px";
button.innerText = "Нажмите, чтобы спрятать текст";

text.innerText = "Text";
text.style.marginLeft = "100px";

const fn = () => {
  text.style.display = "none";
};

button.addEventListener("click", fn);
