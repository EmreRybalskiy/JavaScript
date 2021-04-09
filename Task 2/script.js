const textarea = document.getElementById("textarea");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  localStorage.setItem("text", textarea.value);
});

if (localStorage["text"]) {
  const saveText = localStorage.getItem("text");
  textarea.innerHTML = saveText;
}
