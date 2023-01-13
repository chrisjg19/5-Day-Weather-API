var apiKey = ef0ef37cd58464c069eb38c274a1399b
var geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=1&appid=${apiKey}`
var forecastApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`