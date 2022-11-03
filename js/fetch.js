document.querySelector('#button_city').onclick = myWeatherClick;

function myWeatherClick() {
    let city_name = document.querySelector('.input_city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=f51990e7149906aa689774767bf390da&unit=metric`)
        .then(response => response.json())
        .then(data => {

            let description_weather = ((data['weather'][0].description));
            let temp = ((data['main']['temp'])) + " K";
            let feels_like = ((data['main']['feels_like'])) + " K";
            let temp_min = ((data['main']['temp_min'])) + " K";
            let temp_max = ((data['main']['temp_max'])) + " K";
            let pressure = ((data['main']['pressure'])) + " mbar";
            let humidity = ((data['main']['humidity'])) + " %";
            let sea_level = ((data['main']['sea_level']));
            let speed = ((data['wind']['speed'])) + " m/s";

            document.getElementById('description_weather').innerHTML = description_weather;
            document.getElementById('temp').innerHTML = temp;
            document.getElementById('feels_like').innerHTML = feels_like;
            document.getElementById('temp_min').innerHTML = temp_min;
            document.getElementById('temp_max').innerHTML = temp_max;
            document.getElementById('pressure').innerHTML = pressure;
            document.getElementById('humidity').innerHTML = humidity;
            document.getElementById('sea_level').innerHTML = sea_level;
            document.getElementById('speed').innerHTML = speed;
        })
        .catch(() => console.log('ERROR'));
}





