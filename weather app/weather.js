const ApiId = "c58638b341dc53f9f2d74c5c93fb0042";
const ApiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const input = document.querySelector('.search-box input');
const weatherIcon = document.querySelector('.weather-icon')

async function getWeatherData(city){
    const responce = await fetch(ApiLink+city+`&appid=${ApiId}`)
    var data = await responce.json();

    console.log(data);
    document.querySelector('#tempa').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('.humi').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/h';
    
    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = 'icon.png';
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = 'clear.png';
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src = 'drizel.jpg';
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = 'rainy.jpg';
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src = 'mist.webp';
    }
}

document.querySelector('.bt').addEventListener('click',()=>{
    getWeatherData(input.value);
    console.log(input.value)
})

