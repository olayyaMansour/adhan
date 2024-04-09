import { displayCities } from "./cities.js";
import { getCityAndCountry } from "./location.js";

document.getElementById("js-city-select").innerHTML = displayCities();

function fetchPrayerTimings(city, country) {
  axios
    .get(
      `https://api.aladhan.com/v1/timingsByCity?country=${country}&city=${city}`
    )
    .then((response) => {
      const date = response.data.data.date.readable;
      const day = response.data.data.date.gregorian.weekday.en;
      document.querySelector(".js-today-date").innerHTML = ` ${day} ${date}`;

      const autoCity = response.data.data.meta.timezone;
      document.querySelector(".js-city").innerHTML = city || autoCity;

      const timings = response.data.data.timings;
      replaceTiming("js-fajr-timing", timings.Fajr);
      replaceTiming("js-sunrise-timing", timings.Sunrise);
      replaceTiming("js-dhuhr-timing", timings.Dhuhr);
      replaceTiming("js-asr-timing", timings.Asr);
      replaceTiming("js-maghrib-timing", timings.Maghrib);
      replaceTiming("js-sunset-timing", timings.Sunset);
      replaceTiming("js-isha-timing", timings.Isha);
      replaceTiming("js-lastThird-timing", timings.Lastthird);
    })
    .catch((error) => {
      alert(error);
    });
}
fetchPrayerTimings("Casablanca", "Morocco");

function replaceTiming(className, prayerTiming) {
  document.querySelector(`.${className}`).innerHTML = prayerTiming;
}

function handleLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const location = await getCityAndCountry(latitude, longitude);
        if (location) {
          const { city, country } = location;
          fetchPrayerTimings(city, country);
        } else {
          console.log("Unable to determine user location.");
        }
      },
      (error) => {
        alert(
          "Error getting user location: Enable location access or choose city from dropdown list",
          error
        );
      }
    );
  } else {
    alert("Geolocation is not supported in this browser.");
  }

  document
    .getElementById("js-city-select")
    .addEventListener("change", (event) => {
      const city = event.target.value;
      if (city !== "Choose a city...") {
        fetchPrayerTimings(city, "Morocco");
      }
    });
}
const autoLocationBtn = document.querySelector(".js-location");
let watchId = null;
let isLocationActive = false;

autoLocationBtn.addEventListener("click", () => {
  if (!isLocationActive) {
    watchId = navigator.geolocation.watchPosition(handleLocation);
    autoLocationBtn.style.backgroundColor = "#8ED051";
  } else {
    navigator.geolocation.clearWatch(watchId);
    autoLocationBtn.style.backgroundColor = "";
  }
  isLocationActive = !isLocationActive;
});

document.getElementById("dropdown-icon").addEventListener("click", function () {
  const dropdown = document.getElementById("js-city-select");
  if (dropdown.getAttribute("open")) {
    dropdown.removeAttribute("open");
  } else {
    dropdown.setAttribute("open", "true");
  }
  console.log("object");
});
