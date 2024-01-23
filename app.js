const button = document.querySelector('button');
const city = document.getElementById('location').value;
const weather = document.getElementById('weathers');
const weatherIcon = document.getElementById('weather-icon');


  async function getWeather(){
    const city = document.getElementById('location').value;
      searchTerm = city || 'Lagos'
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchTerm}&appid=966e8bded229ebd5fe5d87e0ffc2de10`, {mode : 'cors'})
      
      if(response.status == 404){
        document.querySelector(".error").style.display = "block";
      } else{
        var data = await response.json()

        console.log(data)
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('#speed').innerHTML = data.wind.speed + "km/h";
        document.querySelector('#humidity').innerHTML = data.main.humidity + "%";

  
        if(data.weather[0].main == "Clouds"){
          weatherIcon.src = "images/clouds.png"
        } 
        else if(data.weather[0].main == "Clear"){
          weatherIcon.src = "images/clear.png"
        } 
        else if(data.weather[0].main == "Rain"){
          weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
          weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
          weatherIcon.src = "images/mist.png"
        }
      }
      
   }
  
  button.addEventListener("click", getWeather)

  