import classes from './card-weather.module.css';
import { WeatherCardData } from '../../interfaces/weatherCardData';



export const CardWeather: React.FC<WeatherCardData> = ({
	city_name,
	weather,
	temp,
	wind_spd,
	rh,
  }) => {

	const weatherIconUrl = `https://www.weatherbit.io/static/img/icons/${weather.icon}.png`;


	const handleAddFavorite = ()=>{

	}

	return (
	  <div className={classes["weather-card"]}>
		<h2>{city_name}</h2>
		<img src={weatherIconUrl} alt={weather.description} />
		<p>{weather.description}</p>
		<p>Temperatura: {temp} °C</p>
		<p>Velocità del vento: {wind_spd} m/s</p>
		<p>Umidità: {rh}%</p>
		<button className={classes["add-to-favorites-button"]} onClick={handleAddFavorite}>Aggiungi ai preferiti</button>
	  </div>
	);
  };