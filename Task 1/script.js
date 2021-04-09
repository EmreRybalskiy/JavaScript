const p = document.createElement("p");
const img = document.createElement("img");

p.append(img);
p.style.backgroundColor = "aqua";
p.style.width = "200px";
p.style.height = "150px";
document.body.append(p);

// 1

const func1 = () => {
  img.src = "../images/cat.jpg";
  img.className = "img";
  img.style.width = "100px";
};
p.addEventListener("click", func1);

// 2

const func2 = () => {
  img.style.width = "200px";
  img.style.transition = "1.5s";
};
img.addEventListener("mouseover", func2);

// 3

const func3 = () => {
  img.style.display = "none";
};
img.addEventListener("click", func3);
