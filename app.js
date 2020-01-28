//initialize weather class

const weather = new Weather('London');
const ui = new UI();

//weather on domload

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then( w => {
        ui.paint(w);
    })
    .catch(err => console.log(err));
}