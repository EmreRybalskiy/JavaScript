
const namesOfDays = {
	ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятницу','Суббота', 'Воскресенье'],
	en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
};

function getNameOfDay(lang, datNumber){
	if (lang in this)  {
		return this[lang][datNumber -1];	
	} else {
		console.log('нету');
	}
	
};

// console.log(getNameOfDay.call(namesOfDays,'ru', 3));
// console.log(getNameOfDay.call(namesOfDays,'en', 3));

console.log(getNameOfDay.call(namesOfDays,'ua', 3));
console.log(getNameOfDay.call(namesOfDays,'uk', 3));


