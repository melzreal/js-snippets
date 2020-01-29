//initialize weather class


const ui = new UI();
const storage = new Storage();
const loc = storage.getLocationData();
const weather = new Weather(loc.city);
//weather on domload

 document.addEventListener('DOMContentLoaded', getWeather);

 document.getElementById('w-change-btn').addEventListener('click', (e) =>{
     const city = document.getElementById('city').value;
     weather.changeLocation(city);
    
     getWeather();
     

      $('#locationModal').modal('hide');
 })

function getWeather(){
    weather.getWeather()
    .then( w => {
         ui.paint(w);
      
    })
    .catch(err => console.log(err));
}