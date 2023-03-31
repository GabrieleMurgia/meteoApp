import classes from './loadingcard.module.css';

export interface LoadingcardProps {}

export const Loadingcard = (props: LoadingcardProps) => {
	
	return (
		<div className={classes.container}>
			<div className={classes.loader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};