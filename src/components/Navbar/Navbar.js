import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { logo } from "../../images/images";
import styles from "./styles.module.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navItems = [
    { navItem: "Home", to: "/" },
    { navItem: "Staking", to: "/staking" },
    { navItem: "Create IDO", to: "/createIdo" },
    { navItem: "Create Token", to: "/createToken" },
    { navItem: "Docs", to: "/docs" },
  ];
  return (
    <section className={styles.navbar}>
      <div className="container">
        <div className={styles.navs}>
          <img src={logo} alt="#" className={styles.logo} />
          <div className={`${styles.navItems} ${sidebar && styles.sidebar}`}>
            {navItems.map((el, i) => (
              <NavLink
                to={el.to}
                key={i}
                className={({ isActive }) =>
                  isActive ? styles.navItemActive : styles.navItem
                }
              >
                {el.navItem}
              </NavLink>
            ))}
            {sidebar && (
              <MdOutlineClose
                className={styles.close}
                onClick={() => setSidebar((prev) => !prev)}
              />
            )}
          </div>
          <div className={styles.buttonContainer}>
            <Link to="/createLottery" className={styles.button}>
              <span className={styles.buttonText}>Crate Lottery</span>
            </Link>

            <RxHamburgerMenu
              className={styles.hamburger}
              onClick={() => setSidebar((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
