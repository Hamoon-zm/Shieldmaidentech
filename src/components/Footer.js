import Navigation from "./Navigation";
import classes from './Footer.module.css';

import logo from './../assets/shieldmaiden.svg';

function Footer() {
  return(
    <footer className={classes.footer} >
        <div>
            <logo className={classes.logo}><img src={logo} alt="Shieldmaiden Logo"/></logo>
            <address>5555 Walkers Rd, Burlington <br/> Onario, L9L 3M2 </address>
        </div>
        <Navigation/>
    </footer>
  )
}

export default Footer;
