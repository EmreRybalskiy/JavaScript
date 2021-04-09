function getCity() {
	let arr = []
	for (key in this) {	
		arr.push(`${key} - это ${this[key]}`);
	};
	console.log(arr);
};

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const result = getCity.bind(citiesAndCountries);
result();