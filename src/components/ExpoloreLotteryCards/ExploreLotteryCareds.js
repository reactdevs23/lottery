import React, { useState } from "react";
import {
  BiSearch,
  BiChevronUpCircle,
  BiChevronDownCircle,
} from "react-icons/bi";
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
} from "../../images/images";
import Cards from "./Cards/Cards";
import styles from "./styles.module.css";

const ExploreLotteryCareds = ({ slice }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState("Newest");
  const allFilterByItems = ["Newest", "Oldest", "Best"].filter(
    (el) => el.toLocaleLowerCase() !== filterBy.toLocaleLowerCase()
  );
  const [dropDown, setDropDown] = useState(false);

  // categoryWiseFilter
  const [category, setCategory] = useState("trading card");
  const allCategory = ["all", "trading card", "gaming", "lottery"];

  const data = [
    {
      countTime: "Mar 15 2023 05:30:01",
      image: card1,
      name: "NFT Diamond Stone",
      price: {
        usd: 4378,
        eth: 20,
      },
      to: "",
    },
    {
      countTime: "Mar 15 2023 05:30:01",
      image: card2,
      name: "NFT Diamond Stone",
      price: {
        usd: 4378,
        eth: 20,
      },
      to: "",
    },
    {
      countTime: "Mar 15 2023 05:30:01",
      image: card3,
      name: "NFT Diamond Stone",
      price: {
        usd: 4378,
        eth: 20,
      },
      to: "",
    },
    {
      countTime: "Mar 15 2023 05:30:01",
      image: card4,
      name: "NFT Diamond Stone",
      price: {
        usd: 4378,
        eth: 20,
      },
      to: "",
    },
    {
      countTime: "Mar 15 2023 05:30:01",
      image: card5,
      name: "NFT Diamond Stone",
      price: {
        usd: 4378,
        eth: 20,
      },
      to: "",
    },
    {
      countTime: "Mar 15 2023 05:30:01",
      image: card6,
      name: "NFT Diamond Stone",
      price: {
        usd: 4378,
        eth: 20,
      },
      to: "",
    },
    {
      countTime: "Mar 15 2023 05:30:01",
      image: card7,
      name: "NFT Diamond Stone",
      price: {
        usd: 4378,
        eth: 20,
      },
      to: "",
    },
    {
      countTime: "Mar 15 2023 05:30:01",
      image: card8,
      name: "NFT Diamond Stone",
      price: {
        usd: 4378,
        eth: 20,
      },
      to: "",
    },
  ];
  return (
    <section className={styles.exploreLotteryContainer}>
      <div className="container">
        <div className={styles.exploreLottery}>
          <div className={styles.headingContainer}>
            <h2 className={styles.title}>Explore lottery cards</h2>
            <p className={styles.text}>
              In the section, you can quickly filter and select lotteries based
              on the details of your needs
            </p>
          </div>
          {/* filtering bar */}
          <div className={styles.topBar}>
            <div className={styles.allCategory}>
              {allCategory.map((el, i) => (
                <button
                  className={`${styles.category} ${
                    category.toLocaleLowerCase() ===
                      allCategory[i].toLocaleLowerCase() &&
                    styles.activeCategory
                  }`}
                  key={i}
                  onClick={() => setCategory(el)}
                >
                  {el}
                </button>
              ))}
            </div>
            <div className={styles.searchAndFilter}>
              <div className={styles.inputContainer}>
                <BiSearch className={styles.searchIcon} />
                <input
                  type="text"
                  className={styles.input}
                  name="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search here"
                />
              </div>
              <div className={styles.filter}>
                <div
                  className={styles.dropdown}
                  onClick={() => setDropDown((prev) => !prev)}
                >
                  <p className={styles.dropDownItem}>
                    {" "}
                    <span className={styles.order}>Order : </span> {filterBy}
                  </p>
                  {dropDown ? (
                    <BiChevronUpCircle className={styles.arrow} />
                  ) : (
                    <BiChevronDownCircle className={styles.arrow} />
                  )}
                  {dropDown && (
                    <div className={styles.dropDownItems}>
                      {allFilterByItems.map((el, i) => (
                        <p
                          key={i}
                          className={styles.dropDownItem}
                          onClick={() => {
                            setDropDown(false);
                            setFilterBy(el);
                          }}
                        >
                          {el}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* all items */}
        <div className={styles.cardsWrapper}>
          {data.slice(0, slice).map((el, i) => (
            <Cards {...el} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreLotteryCareds;
