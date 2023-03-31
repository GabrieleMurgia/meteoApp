import classes from './welcomecomponent.module.css';

export interface WelcomecomponentProps {}

export const Welcomecomponent = (props: WelcomecomponentProps) => {
	
	return (
		<div className={classes.container}>
			<h1 className={classes.message}>Cerca la località di cui vuoi conoscere le info meteo, oppure utilizza la tua posizione attuale</h1>
		</div>
	);
};