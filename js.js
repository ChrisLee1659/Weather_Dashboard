javascript
let weather = {
    "apiKey": "4adc862ea7f2d02242ef820b53d9a380",
    fetchWeather: function (){
      fetch ("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=4adc862ea7f2d02242ef820b53d9a380")
      .then((Response) => Response.json())
      .then((data) => console.log(data));
    },
    displayWeather: function(data) {
      
    }
}