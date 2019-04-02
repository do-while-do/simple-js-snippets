fetch('https://api.openweathermap.org/data/2.5/weather?id=726051&appid=b34ca5d56fee950e2a5130f1da8f4b15')
    .then((resp) => resp.json())
    .then((data) => {
        console.log('Description: ' + data.weather[0].description);
        console.log('Wind speed: ' + data.wind.speed);
        console.log('Min Temprature: ' + (data.main.temp_min - 273.15));
        console.log('Max Temprature: ' + (data.main.temp_max - 273.15));
    });
