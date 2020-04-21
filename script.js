
const weatherDisplay = document.querySelector('.weather-display');
const newsDisplay = document.querySelector('.news-display');
const newsTitle = document.querySelector('.news-title');
const weatherConditions = document.querySelector('.weather-conditions');
const btnWeather = document.querySelector('.btn-weather');
const btnNews = document.querySelector('.btn-news');



btnWeather.addEventListener('click', () =>
{
	window.location.replace('./assets/weather/weather.html')
});

btnNews.addEventListener('click', () =>
{
	window.location.replace('./assets/news/news.html')
})



window.onload = () =>
{

	getApis()
}

const getApis = () =>
{
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position =>
		{
			let longitude = position.coords.longitude;
			let latitude = position.coords.latitude;
			console.log(latitude);

			const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=fdc20835f2afc8721c378d891785f78d`;

			fetch(api)
				.then(res => res.json())
				.then(data =>
				{
					console.log(data);

					const temperature = data.main.temp
					const celsius = Math.floor(temperature);
					const paragraph = document.createElement('p');
					paragraph.setAttribute('class', 'temp')
					paragraph.textContent = `${celsius}°C`;
					weatherDisplay.appendChild(paragraph)
					console.log(temperature);


					let weatherImg = document.createElement('img')
					weatherImg.setAttribute('class', 'weather-icon')
					const iconData = data.weather[0].icon;
					weatherImg.setAttribute('src', `http://openweathermap.org/img/wn/${iconData}@2x.png`)
					weatherImg.textContent = iconData
					weatherDisplay.appendChild(weatherImg)

					let feelsLike = document.createElement('p')
					feelsLikeAPI = data.main.feels_like
					const tempRound = Math.round(feelsLikeAPI)

					feelsLike.setAttribute('class', 'feels-like')
					feelsLike.textContent = `Feels like ${tempRound}°C`;
					weatherConditions.appendChild(feelsLike)

					let humidity = document.createElement('p')
					humidity.setAttribute('class', 'humidity')
					humidity.textContent = `Humidity ${data.main.humidity}`;
					weatherConditions.appendChild(humidity)


					let tempDescription = document.createElement('p')
					tempDescription.setAttribute('class', 'temp-description')
					tempDescription.textContent = data.weather[0].main;
					weatherConditions.appendChild(tempDescription)


				});
		});


	}

	const url = 'http://newsapi.org/v2/top-headlines?' +

		'sources=bbc-news&' +
		'apiKey=ccb44bac3b5645e98e57b3468afcb5e0';
	fetch(url)
		.then(res => res.json())
		.then(data =>
		{
			console.log(data)

			const editNews = data.articles[0].title;
			// newsTitle.textContent = editNews;

			const anchor = document.createElement('a')
			anchor.setAttribute('href', data.articles[0].url);
			anchor.textContent = editNews


			newsTitle.appendChild(anchor);

			const descNews = data.articles[0].description;
			const pNews = document.createElement('p')
			pNews.textContent = descNews;
			newsDisplay.appendChild(pNews);

		})

}









