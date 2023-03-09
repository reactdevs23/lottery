import React from "react";
import { Link } from "react-router-dom";
import Counter from "../../Counter/Counter/Counter";
import styles from "./styles.module.css";

const Cards = ({ countTime, image, name, price, to }) => {
  return (
    <div className={styles.card}>
      <div className={styles.counter}>
        <Counter time={countTime} />
      </div>
      <img src={image} alt="#" className={styles.image} />
      <p className={styles.name}>{name}</p>
      <div className={styles.price}>
        <p className={styles.key}>Price</p>
        <p className={styles.value}>
          {" "}
          <span className={styles.usd}> ($${price.usd})</span>{" "}
          <span className={styles.eth}>{price.eth} ETH</span>
        </p>
      </div>
      <Link to="/details" href={to} className={styles.button}>
        Buy Ticket
      </Link>
    </div>
  );
};

export default Cards;
