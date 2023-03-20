import React from "react";
import { beast } from "../../images/images";
import AllTickets from "../../components/Details/AllTickets/AllTickets";
import TicketDetails from "../../components/Details/TicketDetails/TicketDetails";
import styles from "./styles.module.css";
import ChatBox from "../../components/Details/ChatBox/ChatBox";
import ExploreLotteryCareds from "../../components/ExpoloreLotteryCards/ExploreLotteryCareds";

const Details = () => {
  return (
    <div className={styles.detailsContainer}>
      <div className="container">
        {" "}
        <div className={styles.details}>
          <img src={beast} alt="#" className={styles.image} />
          <TicketDetails />

          <AllTickets />
          <ChatBox />
        </div>
      </div>
      <ExploreLotteryCareds slice={4} />
    </div>
  );
};

export default Details;
