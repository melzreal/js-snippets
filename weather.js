
class Weather{
    constructor(city){
        this.apiKey = 'd69eaf16edf6c60866c0ecbbdffcdb6b';
        this.city = city;
    }

    async getWeather(){
        
        let reqURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`;

        const response = await fetch(reqURL);
        const responseData = await response.json();

        return responseData;
    } 


    changeLocation(city){
        this.city = city;
    }
}

