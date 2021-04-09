const div = document.getElementsByClassName('holder');
const item1 = document.createElement('div');
const item2 = document.createElement('div');
const item3 = document.createElement('div');
const item4 = document.createElement('div');
const item5 = document.createElement('div');


for (const item of div) {
	item1.className = 'item';
	item.append(item1);
	item1.style.background ='#fd644d';
	item1.style.width = '50%';
	item1.style.height = '50%';
	item1.style.fontSize = '20px';
	item1.style.alignItems = 'center';
	item1.style.justifyContent = 'center';
	item1.innerText = '1';
	item1.style.display = 'flex';

}
for (const item of div) {
	item2.className = 'item';
	item.append(item2);
	item2.style.alignItems = 'center';
	item2.style.justifyContent = 'center';
	item2.innerText = '2';
	item2.style.display = 'flex';
	item2.style.background ='#fda429';
	item2.style.width = '50%';
	item2.style.height = '50%';
	
}
for (const item of div) {
	item3.className = 'item';
	item.append(item3);
	item3.style.alignItems = 'center'
	item3.style.justifyContent = 'center';
	item3.innerText = '3';
	item3.style.display = 'flex';
	item3.style.background ='purple';
	item3.style.width = '33.33%';
	item3.style.height = '50%';
	item3.style.flexGrow = '1';

}
for (const item of div) {
	item4.className = 'item';
	item.append(item4);
	item4.style.alignItems = 'center';
	item4.style.justifyContent = 'center';
	item4.innerText = '4';
	item4.style.display = 'flex';
	item4.style.background ='blue';
	item4.style.width = '33.33%';
	item4.style.height = '50%';
	item4.style.flexGrow = '1';

}

for (const item of div) {
	item5.className = 'item';
	item.append(item5);
	item5.style.alignItems = 'center';
	item5.style.justifyContent = 'center';
	item5.innerText = '5';
	item5.style.display = 'flex';
	item5.style.background ='green';
	item5.style.width = '33.33%';
	item5.style.height = '50%';
	item5.style.flexGrow = '1';
}

for (const div1 of div) {
	div1.style.width = '600px';
	div1.style.height = '200px';
	div1.style.margin = '250px auto';
	div1.style.background = 'red';
	div1.style.display = 'flex';
	div1.style.flexWrap = 'wrap';
	div1.style.overflow = 'hidden';
	div1.style.border = '5px solid black';
	div1.style.borderTopRightRadius = '20px';
	div1.style.borderTopLeftRadius = '20px';

}