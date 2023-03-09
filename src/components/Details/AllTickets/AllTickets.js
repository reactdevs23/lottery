import React, { useState } from "react";
import {
  BiSearch,
  BiChevronUpCircle,
  BiChevronDownCircle,
} from "react-icons/bi";
import { arrow } from "../../../images/images";

import styles from "./styles.module.css";

const AllTickets = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState("Newest");
  const allFilterByItems = ["Newest", "Oldest", "Best"].filter(
    (el) => el.toLocaleLowerCase() !== filterBy.toLocaleLowerCase()
  );
  const [dropDown, setDropDown] = useState(false);

  // categoryWiseFilter
  const [category, setCategory] = useState("All Tickets");
  const allCategory = ["my tickets", "All Tickets", "all participants"];
  const allTicket = [
    {
      ticketId: "00012A1",
      ticketPrice: {
        bnb: 82,
        usd: 4001.41,
      },
      timeAndDate: "Mar 15 2023 05:30:01",
    },
    {
      ticketId: "00012A1",
      ticketPrice: {
        bnb: 82,
        usd: 4001.41,
      },
      timeAndDate: "Mar 15 2023 05:30:01",
    },
    {
      ticketId: "00012A1",
      ticketPrice: {
        bnb: 82,
        usd: 4001.41,
      },
      timeAndDate: "Mar 15 2023 05:30:01",
    },
    {
      ticketId: "00012A1",
      ticketPrice: {
        bnb: 82,
        usd: 4001.41,
      },
      timeAndDate: "Mar 15 2023 05:30:01",
    },
    {
      ticketId: "00012A1",
      ticketPrice: {
        bnb: 82,
        usd: 4001.41,
      },
      timeAndDate: "Mar 22 2023 09:10",
    },
    {
      ticketId: "00012A1",
      ticketPrice: {
        bnb: 82,
        usd: 4001.41,
      },
      timeAndDate: "Mar 22 2023 09:10",
    },
    {
      ticketId: "00012A1",
      ticketPrice: {
        bnb: 82,
        usd: 4001.41,
      },
      timeAndDate: "Mar 22 2023 09:10",
    },
    {
      ticketId: "00012A1",
      ticketPrice: {
        bnb: 82,
        usd: 4001.41,
      },
      timeAndDate: "Mar 22 2023 09:10",
    },
    {
      ticketId: "00012A1",
      ticketPrice: {
        bnb: 82,
        usd: 4001.41,
      },
      timeAndDate: "Mar 22 2023 09:10",
    },
    {
      ticketId: "00012A1",
      ticketPrice: {
        bnb: 82,
        usd: 4001.41,
      },
      timeAndDate: "Mar 15 2023 05:30:01",
    },
  ];
  const dateFormat = (inputDate) => {
    const date = new Date(inputDate);
    const newDate = date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",

      hourCycle: "h23",
    });
    return newDate;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <div className={styles.allCategory}>
          {allCategory.map((el, i) => (
            <button
              className={`${styles.category} ${
                category.toLocaleLowerCase() ===
                  allCategory[i].toLocaleLowerCase() && styles.activeCategory
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

      <div className={styles.heading}>
        <p className={styles.title}>
          Ticket ID <img src={arrow} alt="" className={styles.icon} />
        </p>
        <p className={styles.title}>
          Ticket Price <img src={arrow} alt="" className={styles.icon} />
        </p>
        <p className={styles.title}>
          Time And Date <img src={arrow} alt="" className={styles.icon} />
        </p>
      </div>
      <div className={styles.allTickets}>
        {allTicket.map((el, i) => (
          <div key={i} className={styles.ticketInfo}>
            <p className={styles.ticketText}>#{el.ticketId}</p>
            <p className={styles.ticketText}>
              {el.ticketPrice.bnb}BNB (${el.ticketPrice.usd.toLocaleString()})
            </p>
            <p className={styles.ticketText}>{dateFormat(el.timeAndDate)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTickets;
