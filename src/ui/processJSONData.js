export default function processJSONData(json, unit) {
  const containerDiv = document.querySelector(".container");
  containerDiv.innerHTML = "";

  const address = document.createElement("h1");
  address.textContent = json.resolvedAddress;

  containerDiv.appendChild(address);

  json.days.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");

    const dateAndDescription = document.createElement("h2");
    const [yearNumber, monthNumber, dayNumber] = day.datetime
      .split("-")
      .map(Number);
    const date = new Date(yearNumber, monthNumber - 1, dayNumber);
    const dateFormatted = date
      .toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
      .replace(",", "");
    dateAndDescription.textContent = `${dateFormatted} - ${day.description}`;

    const temperature = document.createElement("div");
    let measurementUnit;
    switch (unit) {
      case "Fahrenheit":
        measurementUnit = "F";
        break;

      case "Celcius":
        measurementUnit = "C";
        break;

      case "Kelvin":
        measurementUnit = "K";
        break;
    }

    temperature.textContent = `Temperature: ${day.temp}°${measurementUnit} (min: ${day.tempmin}°${measurementUnit} | max: ${day.tempmax}°${measurementUnit} | feelslike: ${day.feelslike}°${measurementUnit})`;

    const humidity = document.createElement("div");
    humidity.textContent = `Humidity: ${day.humidity}%`;

    const precipProb = document.createElement("div");
    precipProb.textContent = `Precip. probability: ${day.precipprob}%`;

    dayDiv.appendChild(dateAndDescription);
    dayDiv.appendChild(temperature);
    dayDiv.appendChild(humidity);
    dayDiv.appendChild(precipProb);

    containerDiv.appendChild(dayDiv);
  });
}
