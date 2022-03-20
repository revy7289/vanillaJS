const weather = document.querySelector("#weather");
const city = document.querySelector("#city");
const API_KEY = "687ea2df63af1d374d4d1379f6abd192";

function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => { 

        function placeWeather() {
            const weatherChip = selChip();
            const weather_h1 = document.createElement("h1")
            weather_h1.innerText = `${data.weather[0].main} ${data.main.temp}˚C`;
            weather_h1.className = "weather";
            const city_h2 = document.createElement("h2")
            city_h2.innerText = data.name;
            city_h2.className = "city"
            const icon = document.createElement("img")
            icon.className = "icon"
            icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
            weatherChip.appendChild(icon)
            weatherChip.appendChild(weather_h1);
            weatherChip.appendChild(city_h2);
        }

        placeWeather();
        console.log(url)
    });
}

function onGeoError() {
    alert("Can't find you. No Weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);