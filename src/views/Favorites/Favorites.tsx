import classes from './favorites.module.css';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { CardWeather } from '../../components/CardWeather/CardWeather';



export interface FavoritesProps {}

export const Favorites = (props: FavoritesProps) => {

	const favorites = useSelector((state:RootState) => state.favorites.list);
	
	return (
		<div className={classes["container"]}>

				{favorites.length === 0 &&
				<div className={classes["no-favorites-message"]}>Ancora nessun preferito qui</div>
				 }

  			<div className={classes["favorites-list"]}>
  				{favorites.map((weatherItem) => (
  				<CardWeather key={weatherItem.city_name} weatherData={weatherItem} />
					))}
  				</div>
		</div>
	);
};