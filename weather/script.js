const enter = document.getElementById("enterBtn");

const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const image = document.getElementById("image");
const apiKey = "18b219551211794b08d7ab1492dc2e06";

enter.addEventListener("click", (e) => {
  e.preventDefault()
  const input = document.getElementById("cityName").value.trim();

  if (!input) {
    console.log("City name empty");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`)
    .then((res) => {
      if (!res.ok) throw new Error("Invalid city");
      return res.json();
    })
    .then((data) => {
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      temperature.innerHTML = `Temperature : ${data.main.temp}°C`;
      humidity.innerHTML = `Humidity : ${data.main.humidity}%`;
      pressure.innerHTML = `Pressure : ${data.main.pressure} hPa`;
    })
    .catch((err) => {
      console.log(err.message);
    });
});
