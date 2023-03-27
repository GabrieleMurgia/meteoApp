import { useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';

import classes from './home.module.css';

export interface HomeProps {}

export const Home = (props: HomeProps) => {

	const [currentWeather ,setCurrentWeather ] = useState()


	

	return (
		<div className={classes["container"]}>
  <Navbar />
  <div className={classes["container-home"]}>
    <div className={classes["header"]}>
      <h1 className={classes["welcome-message"]}>Meteo App</h1>
    </div>

    <div className={classes["search-container"]}>
		
     <div className={classes["search-container-top"]}>
	 <input
        type="text"
        className={classes["search-input"]}
        placeholder="Cerca una località"
       
      />
	  
      <button className={classes["search-button"]} >
        Cerca
      </button>
	  
	 </div>
	  <div className={classes["search-container-bottom"]}>
	  <button className={classes["location-button"]} >
        Utilizza la mia posizione
      </button>
	  </div>
    </div>

    {currentWeather && (
      <div className={classes["weather-card-container"]}>
       
      </div>
    )}
  </div>
</div>
	);
};