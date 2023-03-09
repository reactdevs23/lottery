import React from "react";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Find <span className={styles.italic}>and enjoy</span> lotteries{" "}
            <span className={styles.italic}>with</span> our platform
          </h1>
          <p className={styles.text}>
            SolidHash is the world's first CEX-DEX hybrid cryptocurrency
            exchange. Launched in 2021, users enjoy safe and smooth trading on
            SolidHash CEX and DEX with up to 150x leverage.{" "}
          </p>
          <div className={styles.buttonContainer}>
            <span className={styles.buttonText}>Find lotteries</span>
            <Link className={styles.buttonWrapper}>
              <p className={styles.button}>
                <CgArrowLongRight className={styles.arrow} />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
