const div = document.getElementById('main');
const blue = document.createElement('div');
const green = document.createElement('div');

div.style.width = '150px';
div.style.height = '150px';
div.style.background = 'red';
div.style.position = 'relative'


blue.className = "blue";
div.append(blue);
blue.style.width = '150px';
blue.style.height = '150px';
blue.style.background = 'blue';
blue.style.position = 'absolute';
blue.style.top = '50%';
blue.style.left = '50%';
blue.style.zIndex = '1'

green.className = "green";
div.append(green);
green.style.width = '150px';
green.style.height = '150px';
green.style.background = 'green';
green.style.position = 'absolute';
green.style.top = '100%';
green.style.left = '100%';
