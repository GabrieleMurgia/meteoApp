import classes from './navbar.module.css';

export interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
	
	return (
		<>
		<nav className={classes["navbar"]}>
  		<div className={classes["navbar-container"]}>
    	<a  className={classes["navbar-logo"]}>Logo</a>
    	<ul className={classes["navbar-menu"]}>
      	<li className={classes["navbar-item"]}><a  className={classes["navbar-link"]}> Home </a></li>
      	<li className={classes["navbar-item"]}><a  className={classes["navbar-link"]}> Preferiti </a></li>
    	</ul>
  		</div>
		</nav>
		</>
	);
};