import classes from './navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import LogoTransparent from '../../assets/img/LogoTransparent.png';

export interface NavbarProps {}
export const Navbar = (props: NavbarProps) => {
	
  const location = useLocation();

	return (
		<>
  <nav className={classes["navbar"]} style={location.pathname === '/favorites' ? {position:'fixed'} : {position:'initial'}}>
    <div className={classes["navbar-container"]}>
      <Link className={classes["navbar-logo"]} to="/"><img className={classes["navbar-logo-img"]} src={LogoTransparent} alt={'app logo'}></img></Link>
      <ul className={classes["navbar-menu"]}>
        <li className={classes["navbar-item"]}>
          <Link className={classes["navbar-link"]} to="/">Home</Link>
        </li>
        <li className={classes["navbar-item"]}>
          <Link className={classes["navbar-link"]} to="/favorites">Preferiti</Link>
        </li>
      </ul>
    </div>
  </nav>
</>
	);
};