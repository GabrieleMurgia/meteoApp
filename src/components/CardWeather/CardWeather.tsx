import React from 'react';
import classes from './card-weather.module.css';
import { WeatherCardData } from '../../interfaces/weatherCardData';
import { addFavorite } from '../../store/favoritesSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const CardWeather: React.FC<{ weatherData: WeatherCardData }> = ({weatherData}) => {
  const { city_name, weather, temp, wind_spd, rh } = weatherData;
  const weatherIconUrl = `https://www.weatherbit.io/static/img/icons/${weather.icon}.png`;

 const dispatch = useDispatch();
 const navigate = useNavigate();

	const handleNavigation = () => {
  	navigate(`/city/${city_name}`);
	};
	
  const handleAddFavorite = (weatherData: WeatherCardData) => {
    dispatch(addFavorite(weatherData));
  };

	return (
	  <div className={classes["weather-card"]}>
		<h2>{city_name}</h2>
		<img src={weatherIconUrl} alt={weather.description} />
		<p>{weather.description}</p>
		<p>Temperatura: {temp} °C</p>
		<p>Velocità del vento: {wind_spd} m/s</p>
		<p>Umidità: {rh}%</p>
		<button className={classes["add-to-favorites-button"]} onClick={()=>{handleAddFavorite(weatherData)}}>Aggiungi ai preferiti</button>
		<div className={classes["go-to-forecast"]} onClick={handleNavigation}>Previsioni del tempo</div>
	  </div>
	);
  };

