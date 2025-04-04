import "./styles.css";
import showErrorMessage from "./ui/showErrorMessage.js";
import displayWeatherData from "./ui/displayWeatherData.js";

const locationInput = document.getElementById("location");
const unit = document.querySelector("select");
const errorMessage = document.querySelector("span.error");
const searchButton = document.querySelector("button");

locationInput.addEventListener("input", () => {
  if (locationInput.validity.valid) {
    errorMessage.textContent = "";
  } else {
    showErrorMessage(locationInput, errorMessage);
  }
});

searchButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (locationInput.validity.valid) {
    displayWeatherData(locationInput.value.toLowerCase().trim(), unit.value);
  } else {
    showErrorMessage(locationInput, errorMessage);
  }
});
