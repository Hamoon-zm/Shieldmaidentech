import classes from "./Header.module.css";
import shieldmaiden from "./../assets/shieldmaiden.svg";
import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      <div className={classes.header}>
        <img
          src={shieldmaiden}
          className={classes.logo}
          alt="Shieldmaiden logo"
        />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
