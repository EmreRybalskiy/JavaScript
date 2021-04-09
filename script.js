fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6")

	.then((data) => {
		if (data.status !== 200) {
			console.log('Возникла какая-то ошибка');
			console.log(`Status Code ${data.status}`);
		} else {
			return data.json();
		}
	}).then((result) => {
			for (let i = 0; i < result.length; i++) {
				const div = document.createElement('div');
				const img = document.createElement('img');
				const span = document.createElement('span');
				const link = result[i].image_url;
				span.innerHTML = result[i].description;

				div.style.display = 'flex';
				div.style.margin = '50px';
				div.style.width = '500px';
				div.style.overflow = 'hidden';
				div.style.alignItems = 'center';
				span.style.marginLeft = '20px';
				img.style.width = '100px';

				div.appendChild(img);
				div.append(span);
				document.body.prepend(div);
				img.setAttribute("src", link);
				img.addEventListener('click', function() {
					localStorage.setItem(result[i].name, result[i].id);
				})
		}
	})