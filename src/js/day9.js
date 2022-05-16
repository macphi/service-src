var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var sun = document.querySelector(".sun span");
var wind = document.querySelector(".wind span");
var value = document.querySelector(".value");

async function changeWeatherUI() {
  search.value.trim();
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=ha noi&appid={29e364ede895a52ff3ac6c25e3885272}`

  let data = await fetch(apiURL).then((res)=> res.json());
  console.log(data);
}
changeWeatherUI();
