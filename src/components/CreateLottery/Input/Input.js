import React from "react";
import Switch from "../Switch/Switch";
import styles from "./styles.module.css";

const Input = ({
  icon,
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  switchs,
  disable,
  setDisable,
}) => {
  return (
    <>
      <div className={`${styles.inputContainer}`}>
        <label
          htmlFor={name}
          className={`${styles.label} ${styles.text} ${
            switchs && styles.swithcWrapper
          }`}
        >
          {label}{" "}
          {switchs && (
            <Switch
              isOn={disable}
              handleToggle={() => setDisable((prev) => !prev)}
              colorOne="rgba(236, 221, 255, 0.5)"
              colorTwo="gba(236, 221, 255, 0.5)"
            />
          )}
        </label>
        <div
          className={` ${styles.inputAndIcon}  ${
            disable && styles.inputDisabled
          }`}
        >
          <img src={icon} alt="#" className={styles.icon} />
          <input
            type={type}
            disabled={disable}
            id={name}
            name={name}
            value={value}
            className={`${styles.input} ${styles.text}`}
            placeholder={placeholder}
            onChange={onChange}
            min={type === "number" ? 1 : ""}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
