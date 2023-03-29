import axios from 'axios';
const API_KEY = process.env.REACT_APP_WEATHERBIT_API_KEY;

const weatherAPI = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0',
});

export const getCurrentWeather = async (latitude?: number,longitude?: number,cityName?: string) => {
  let url = '/current';
  if (latitude && longitude) {
    url += `?lat=${latitude}&lon=${longitude}&key=${API_KEY}`;
  } else if (cityName) {
    url += `?city=${cityName}&key=${API_KEY}`;
  }
  try {
    const response = await weatherAPI.get(url);
    return response.data.data[0];
  } catch (error) {
    throw error;
  }
};

export const fetchWeatherForecast = async (cityName: string) => {
  const response = await axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&days=7&key=${API_KEY}`
  );
  return response.data;
};