import getWeatherData from "../api/getWeatherData.js";
import processJSONData from "./processJSONData.js";

export default async function displayWeatherData(location, unit) {
  const containerDiv = document.querySelector(".container");
  const errorMessage = document.querySelector("span.error");

  containerDiv.innerHTML = "";
  errorMessage.textContent = "";

  const loadingText = document.createElement("h1");
  containerDiv.appendChild(loadingText);

  let dotCount = 0;
  const baseText = "Loading";
  loadingText.textContent = baseText;

  const interval = setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    loadingText.textContent = baseText + ".".repeat(dotCount);
  }, 500);

  try {
    const json = await getWeatherData(location, unit);

    clearInterval(interval);
    processJSONData(json, unit);
  } catch (error) {
    clearInterval(interval);
    containerDiv.innerHTML = "";
    errorMessage.textContent = error.message;
  }
}
