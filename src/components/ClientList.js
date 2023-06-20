import client1 from "./../assets/client1.svg";
import client2 from "./../assets/client2.svg";

import classes from './ClientList.module.css'

function ClientList() {
  return (
    <div className={classes.box}>
      <img src={client1} alt="Client1" />
      <img src={client2} alt="Client2" />
      <img src={client1} alt="Client1" />
      <img src={client2} alt="Client2" />
      <img src={client1} alt="Client1" />
      <img src={client1} alt="Client1" />
    </div>
  );
}

export default ClientList;
