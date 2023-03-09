import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import Counter from "../../Counter/Counter/Counter";
import { copy, bnb } from "../../../images/images";

import styles from "./styles.module.css";

const TicketDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [priceInBnb, setPriceInBnb] = useState(20);
  const [priceInUsd, setPriceInUsd] = useState(6845.21);
  const increase = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>a KID called BEAST - #96134 </h2>
      <div className={styles.countDownContainer}>
        {" "}
        <div className={styles.header}>
          <p className={styles.text}>Sales ending in :</p>
          <div className={styles.infoButtons}>
            <p className={styles.publicRound}>
              <span className={styles.circle}></span>

              <span className={styles.publicRoundText}> Public Round</span>
            </p>
            <button className={styles.liveButton}>Live</button>
          </div>
        </div>
        <Counter
          time="Mar 15 2023 05:30:01"
          text
          background="rgba(236, 221, 255, 0.1)"
        />
      </div>

      <div className={styles.contactAddress}>
        <p className={styles.text}>Contract Address:</p>
        <div className={styles.address}>
          <p className={styles.text}>0xee2dB83Cf . . . 0c11fDA4c0C</p>
          <img src={copy} alt="#" className={styles.copy} />
        </div>
      </div>

      <div className={styles.buyContainer}>
        <div className={styles.buyWrapper}>
          <div className={styles.priceWrapper}>
            <div className={styles.bnbContainer}>
              <img src={bnb} alt="#" />{" "}
            </div>
            <div className={styles.price}>
              <p className={styles.bnb}>{priceInBnb * quantity} BNB</p>
              <p className={styles.usd}>
                (${(priceInUsd * quantity).toFixed(2)})
              </p>
            </div>
          </div>

          <div className={styles.quantityWrapper}>
            <div className={styles.iconContainer} onClick={decrease}>
              <BiMinus className={styles.icon} />
            </div>
            <div className={styles.quantity}>
              <p>{quantity}</p>
            </div>

            <div className={styles.iconContainer} onClick={increase}>
              <BiPlus className={styles.icon} />
            </div>
          </div>
        </div>
        <button className={styles.button}>Buy Ticket</button>
      </div>
    </div>
  );
};
export default TicketDetails;
