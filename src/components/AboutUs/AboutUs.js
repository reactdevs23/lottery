import React from "react";
import styles from "./styles.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className="container">
        <div className={styles.textContainer}>
          <div className={styles.aboutUsText}>
            <span>About us</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.italic}>Learn more</span>{" "}
            <span className={styles.normal}>about our blockchain</span>{" "}
            <span className={styles.italic}>lottery platform</span>
          </h2>
          <p className={styles.text}>
            SolidHash is the world's first CEX-DEX hybrid cryptocurrency
            exchange. Launched in 2021, users enjoy safe and smooth trading on
            SolidHash CEX and DEX with up to 150x leverage.{" "}
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.activeButton}>
              <span className={styles.buttonText}>Learn more</span>
            </button>{" "}
            <button className={styles.button}>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
