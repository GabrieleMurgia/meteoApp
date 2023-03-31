import classes from './favorites.module.css';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { CardWeather } from '../../components/CardWeather/CardWeather';
import { useLocation } from 'react-router-dom';



export interface FavoritesProps {}

export const Favorites = (props: FavoritesProps) => {

	const location = useLocation();


	const favorites = useSelector((state:RootState) => state.favorites.list);
	
	return (
		<div className={classes["container"]}>

				{favorites.length === 0 &&
				<div className={classes["no-favorites-message"]}>Ancora nessun preferito qui</div>
				 }

  			<div className={classes["favorites-list"]} style={ location.pathname === '/favorites' ? {marginTop:'93px'} : {} }>
  				{favorites.map((weatherItem) => (
  				<CardWeather key={weatherItem.city_name} weatherData={weatherItem} />
					))}
  				</div>
		</div>
	);
};