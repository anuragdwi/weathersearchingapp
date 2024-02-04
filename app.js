let weather = {
  apiKey: "4af016faac7ffc47e4b9ccc651442469",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    // console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerHTML = `Weather in ${name}`;
    document.querySelector(".temp").innerHTML = ` ${temp}°C`;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".desc").innerText = description;
    document.querySelector(".humidity").innerHTML = `Humidity : ${humidity}%`;
    document.querySelector(".windy").innerHTML = `Wind speed :${speed}km/h`;
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document

  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
