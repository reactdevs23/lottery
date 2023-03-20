import React, { useState } from "react";
import Input from "./Input/Input";
import { textIcon, dollar, usdt, calender, winner } from "../../images/images";
import styles from "./styles.module.css";
import ImageUpload from "./DropImage/ImageUpload";

const CreateLottery = () => {
  const [disable, setDisable] = React.useState(true);
  const [values, setValues] = useState({
    lotteryName: "",
    lotteryPrice: "",
    lottrySymbol: "",
    lottryEndDate: "",
    numberofWinners: "",
    charityAddress: "",
  });

  const inputs = [
    {
      icon: textIcon,
      label: "Lottery name",
      type: "text",
      name: "lotteryName",
      placeholder: "Enter name",
    },
    {
      icon: dollar,
      label: "Lottery Price",
      type: "number",
      min: 1,
      name: "lotteryPrice",
      placeholder: "Enter price",
    },
    {
      icon: usdt,
      label: "Lottery Symbol",
      type: "text",
      name: "lottrySymbol",
      placeholder: "Enter symbol",
    },
    {
      icon: calender,
      label: "lottery end date",
      type: "date",
      name: "lottryEndDate",

      placeholder: "Enter date",
    },
    {
      icon: winner,
      label: "Number of winners",
      type: "number",
      min: 1,
      name: "numberofWinners",
      placeholder: "Enter number",
    },
    {
      icon: winner,
      label: "Charity Address",
      type: "number",
      min: 1,
      name: "charityAddress",
      placeholder: "Enter number",
      switchs: true,
      disable: disable,
      setDisable: setDisable,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <section className={styles.createLotteryContainer}>
      <div className="container">
        <div className={styles.headingContainer}>
          <h2 className={styles.title}>Create lottery</h2>
          <p className={styles.text}>
            In the section, you can quickly filter and select lotteries based on
            the details of your needs
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.uploadingImage}>
            <ImageUpload />
          </div>
          <form className={styles.details}>
            {" "}
            <div className={styles.inputWrapper}>
              {inputs.map((input, i) => (
                <Input
                  {...input}
                  key={i}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>
            {/* <div className={styles.inputWrapper}>
              <Input
                type="text"
                name="charityAddress"
                value={values["charityAddress"]}
                placeholder="Enter number"
                onChange={onChange}
              />
            </div> */}
            <button className={styles.button}>create lottery</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateLottery;
