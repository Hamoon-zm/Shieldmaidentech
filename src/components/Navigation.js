import classes from './Navigation.module.css';
import { Link } from "react-router-dom";


function Navigation () {
    return (
        <nav className={classes.nav}>
        <ul>
          <li>
            <Link activeClassName={classes.active} to="/">
              Home
            </Link>
            <Link activeClassName={classes.active} to="/about">
              About Us
            </Link>
            <Link activeClassName={classes.active} to="/clients">
              Our Clients
            </Link>
            <Link activeClassName={classes.active} to="/services">
              Services
            </Link>
            <Link activeClassName={classes.active} to="/account">
              My Account
            </Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navigation;