const { checkConditions } = require('./weather'); 

const weatherData = {
    temperature: 22,
    humidity: 51,
    windSpeed: 13,
};

const isWeatherSuitable = checkConditions(weatherData);

if (!isWeatherSuitable) {
    console.log("Weather is not suitable for planting.");
} else {
    console.log("The weather is suitable for planting.");
}