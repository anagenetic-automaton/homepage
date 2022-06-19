// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth()+1,
    dy = now.getDate(),
    yr = now.getFullYear();

  var tags = ["mon", "d", "y", "h", "m", "s"],
    corr = [dy.pad(2), mo.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2)];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// END CLOCK SCRIPT

/*
const ButtonGENERAL = document.getElementById('ButtonGENERAL');
const DialogGENERAL = document.getElementById('DialogGENERAL');
const outputBox = document.querySelector('output');

ButtonGENERAL.addEventListener('click', function onOpen() {
  if (typeof DialogGENERAL.showModal === "function") {
    DialogGENERAL.showModal();
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
} )


//WEATHER
$(function() {
  
  $('.weather-temperature').openWeather({
  city: 'Toronto, ON', // city name, country / province/ state
  lat: null // defines the latitude
  lng: null // defines the longitude
  key: '83eedf645e178b9914edc6a2b5f04897'
  units: "f" // defines the type of units (c or f).
  lang: 'en',
  descriptionTarget: '.weather-description',
  windSpeedTarget: '.weather-wind-speed',
  minTemperatureTarget: '.weather-min-temperature',
  maxTemperatureTarget: '.weather-max-temperature',
  humidityTarget: '.weather-humidity',
  sunriseTarget: '.weather-sunrise',
  sunsetTarget: '.weather-sunset',
  placeTarget: '.weather-place',
  iconTarget: '.weather-icon',
  customIcons: 'src/img/icons/weather/',
  success: function() {

    //show weather
    $('.weather-wrapper').show();

  },
  error: function(message) {}
  });

});
*/