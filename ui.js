class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-description');
        this.icon =  document.getElementById('w-icon');
        this.temperature =  document.getElementById('w-temp');
        this.humidity =  document.getElementById('w-humidity');
        this.feels =  document.getElementById('w-feels-like');
        this.wind =  document.getElementById('w-wind');


    }

    paint(weather){
        this.location.textContent = weather.name;
        this.description.textContent = `${weather.weather[0].description}`;
        this.icon.textContent = weather.main.temp;
        this.temperature.textContent = weather.main.temp;
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.feels.textContent = `Feels like ${weather.main.feels_like}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}`;

    }
}
