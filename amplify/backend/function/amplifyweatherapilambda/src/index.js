const axios = require('axios');

exports.handler = async (event) => {
  const { queryStringParameters } = event;
  const { city } = queryStringParameters;

  try {
    const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY; // Accessing environment variable
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log('Requesting weather data from:', apiUrl);

    const response = await axios.get(apiUrl);

    const weatherData = {
      city: response.data.name,
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
    };

    console.log('Weather data retrieved:', weatherData);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(weatherData),
    };
  } catch (error) {
    console.error('Error fetching weather data:', error.message);

    // Output additional information from the error object
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status code:', error.response.status);
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
