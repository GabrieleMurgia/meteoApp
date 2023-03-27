import { Navbar } from '../../components/Navbar/Navbar';
import classes from './favorites.module.css';

export interface FavoritesProps {}

export const Favorites = (props: FavoritesProps) => {
	
	return (
		<div className={classes["container"]}>
			<Navbar />
			<div className={classes["container-favorites"]}>

  <div className={classes["header"]}>
    <h1 className={classes["favorites-title"]}>Preferiti</h1>
  </div>

  <div className={classes["favorites-list"]}>
   
  </div>
</div>
		</div>
	);
};