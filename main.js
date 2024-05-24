const C = document.querySelector(".celc");
const F = document.querySelector(".fare");
const weatherDetails = document.querySelector('.weather-detail')
const weatherDesc = document.querySelector(".weather-desc");
const cityQuery = document.querySelector("#cityQuery");
const weatherImage = document.querySelector("#weatherImage");
const myForm = document.querySelector("form");
const errorLine = document.querySelector(".error-line");
const x = document.getElementsByTagName('body')[0];
const y = document.querySelector('.container')
const natFound = document.querySelector('.weater-notfound')

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cityQuery.value == "") {
    errorLine.style.display = "flex";
    console.log("nothing to show");
    setTimeout(() => {
      errorLine.style.display = "none";
    }, 2000);
  } else {
    showWeather(cityQuery.value);
    console.log(`${cityQuery.value}`);
  }
});
const showWeather = async (city) => {
  myKey = `2426947fb38192418ffa2d5c1dff3050`;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
  const WeatherData = await fetch(url).then((response) => response.json());
  if(WeatherData.cod == "404"){
    console.log('not found')
    natFound.style.display = 'flex'
    weatherDetails.style.display = 'none'
  }
  F.innerHTML = Math.round(((WeatherData.main.temp - 273.15) * 9) / 5 + 32);
  C.innerHTML = Math.round(WeatherData.main.temp - 273.15);
  weatherDesc.innerHTML = WeatherData.weather[0].description;
  // weatherDesc = WeatherData.
  console.log(WeatherData);
  switch (WeatherData.weather[0].main) {
    case "Clear":
      weatherImage.src = "Images/clear.png";
      x.style.color = '#f2f27a';
      y.style.boxShadow = '5px 5px 20px #f2f27a';
      break;
    case "Clouds" :
      weatherImage.src = "Images/cloud.png"; 
      x.style.color = '#c4d4e1';
      y.style.boxShadow = '5px 5px 20px #c4d4e1';
      break;
      case "Rain" :
      weatherImage.src = "Images/rain.png"; 
      x.style.color = '#aea79b';
      y.style.boxShadow = '5px 5px 20px #aea79b';
      break;
      case "Mist" :
      weatherImage.src = "Images/mist.png"; 
      x.style.color = '#d0d3c5';
      y.style.boxShadow = '5px 5px 20px #d0d3c5';
      break;
      case "Snow" :
      weatherImage.src = "Images/snow.png"; 
      break;
      case "Haze": 
      weatherImage.src = "Images/haze.png";
      x.style.color = '#9f4576';
      y.style.boxShadow = '5px 5px 20px #9f4576';
    default:
      break;
  }
  weatherDetails.style.display = 'flex'

};
