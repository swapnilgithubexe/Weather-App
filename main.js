document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "cc0e28144a083156c3aa7dfc0e5517c1";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather_icon");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if(response.status == 404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        }
        else{
          var data = await response.json();

        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if(data.weather[0].main == "Clouds"){
          weatherIcon.src = "./images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
          weatherIcon.src = "./images/sun.png";
        }
        else if(data.weather[0].main == "Rain"){
          weatherIcon.src = "./images/rain.png";
        }
        else if(data.weather[0].main == "Haze"){
          weatherIcon.src = "./images/partly-cloudy.png";
        }
        else if(data.weather[0].main == "Thunderstorms"){
          weatherIcon.src = "./images/thunderstorm.png";
        }
        else if(data.weather[0].main == "Snow"){
          weatherIcon.src = "./images/snow.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        }
        
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    });
});
