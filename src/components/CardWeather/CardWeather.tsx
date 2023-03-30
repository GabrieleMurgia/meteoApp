import React from 'react';
import classes from './card-weather.module.css';
import { WeatherCardData } from '../../interfaces/weatherCardData';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export const CardWeather: React.FC<{ weatherData: WeatherCardData }> = ({weatherData}) => {
  const { city_name, weather, temp, wind_spd, rh } = weatherData;
  const weatherIconUrl = `https://www.weatherbit.io/static/img/icons/${weather.icon}.png`;
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const location = useLocation();
 const currentUrl = location.pathname;

	const handleNavigation = () => {
  	navigate(`/city/${city_name}`);
	};
	
  const handleAddFavorite = (weatherData: WeatherCardData) => {
    dispatch(addFavorite(weatherData));
  };

  const handleDelete = () => {
    dispatch(removeFavorite(city_name));
  };

	return (
	  <div className={classes["weather-card"]}>
		<div className={classes["weather-card-top"]} style={ currentUrl !== '/favorites' ? {justifyContent:'center'} : undefined }>
		<h2 >{city_name}</h2>
		{currentUrl === '/favorites' && <span className={classes["weather-remove-button"]} onClick={()=> handleDelete()}>X</span>}
		</div>
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

