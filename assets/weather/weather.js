const searchCity = document.querySelector('.search');
const inputCity = document.querySelector('.search-input');
const weatherDisplay = document.querySelector('.weather-display');
const btnBack = document.querySelector('.btn-back');

window.onload = () =>
{
    // window.location.replace('weather.html')
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>
        {
            let longitude = position.coords.longitude;
            let latitude = position.coords.latitude;
            console.log(latitude);
            const userInput = inputCity.value;
            const api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&q=${userInput}&units=metric&appid=fdc20835f2afc8721c378d891785f78d`;

            fetch(api)
                .then(res => res.json())
                .then(data =>
                {
                    console.log(data);

                    const temperature = data.list[0].main.temp
                    const celsius = Math.floor(temperature);
                    var p = document.createElement('p');
                    p.textContent = `${celsius}°C`;
                    weatherDisplay.appendChild(p)
                    console.log(temperature)
                });
        });
    }
};

btnBack.addEventListener('click', () =>
{

    window.location.replace('../../index.html')
})



