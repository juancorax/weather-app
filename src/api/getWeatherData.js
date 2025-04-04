export default async function getWeatherData(location, unit) {
  let unitGroup;
  switch (unit) {
    case "Fahrenheit":
      unitGroup = "us";
      break;
    case "Celcius":
      unitGroup = "metric";
      break;
    case "Kelvin":
      unitGroup = "base";
      break;
  }

  const params = new URLSearchParams({
    contentType: "json",
    elements:
      "datetime,description,feelslike,humidity,precipprob,temp,tempmax,tempmin",
    include: "days",
    key: "6AWMSRH5Y8JP7NACGNJ3XRZ5T",
    unitGroup: unitGroup,
  });

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?${params}`;

  const response = await fetch(url, { mode: "cors" });
  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new Error("Location not found");
      case 401:
        throw new Error("Invalid API key");
      case 429:
        throw new Error("Too many requests");
      case 500:
        throw new Error("Internal server error");
      default:
        throw new Error(`Response status: ${response.status}`);
    }
  }

  return response.json();
}
