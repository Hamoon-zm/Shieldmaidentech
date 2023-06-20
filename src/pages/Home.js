import hero from "./../assets/hero.png";
import classes from "./Home.module.css";
import { FaChevronDown } from "react-icons/fa";
import ServiceCards from "../components/ServicesCards";
import ClientList from "../components/ClientList";

function Home() {
  function handleScrollbar() {
    const element = document.getElementById("scroll-target");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      {/* big hero */}
      <div className={classes.hero}>
        <img src={hero} alt="Shieldmaiden Tech" />
      </div>
      <div>
        <FaChevronDown
          size={70}
          className={classes.arrow}
          onClick={handleScrollbar}
        />
      </div>

      {/* Services */}
      <div className={classes.backgroundContainer}>
        <div className={classes.backgroundImage} />
        <div className={classes.content}>
          <h2 id="scroll-target">Services</h2>
          <ServiceCards />
        </div>
      </div>

      {/* Clients */}
      <div className={classes.content}>
        <h2>Clients </h2>
        <ClientList />
      </div>
    </>
  );
}

export default Home;
