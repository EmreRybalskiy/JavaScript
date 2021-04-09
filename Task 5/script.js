const aCollection = document.getElementsByTagName("a");

const fn = (event) => {
  event.target.innerText = `${event.target.innerText} (half)`;
};

for (const value of aCollection) {
  value.addEventListener("mouseover", fn);
}
