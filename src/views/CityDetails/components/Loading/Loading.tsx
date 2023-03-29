import classes from './loading.module.css';

export interface LoadingProps {}

export const Loading = (props: LoadingProps) => {
	
	return (
		<div className={classes['loading-container']}>Caricamento...</div>
	);
};