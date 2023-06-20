import React from "react";
import classes from "./ServicesCards.module.css";

import networking from "./../assets/networking.jpg";
import hardware from "./../assets/hardware.jpg";
import cyber from "./../assets/cyber.jpg";
import code from "./../assets/code.jpg";
import phone from "./../assets/phone.jpg";
import programming from "./../assets/programming.jpg";

const cardsData = [
  { id: 1, title: "Networking", img: networking },
  { id: 2, title: "Software & Hardware", img: hardware },
  { id: 3, title: "Security Assessment", img: cyber },
  { id: 4, title: "Phone Systems", img: phone },
  { id: 5, title: "Website Development", img: code },
  { id: 6, title: "Custom Programming", img: programming },
];
function ServiceCards() {
  return (
    <div className={classes.cardGrid}>
      {cardsData.map((card) => (
        <div key={cardsData.id} className={classes.card}>
          <img src={card.img} alt={card.title} className={classes.cardImage} />
          <h3 className={classes.cardTitle}>{card.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default ServiceCards;
