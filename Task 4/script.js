const inp = document.getElementById('inp');
const btn = document.getElementById('btn');

btn.style.width = '19px';
btn.style.height = '19px';
btn.style.background = 'green'

const fn = (event) => {
  console.log(event.target.value);
}

inp.addEventListener('change', fn);