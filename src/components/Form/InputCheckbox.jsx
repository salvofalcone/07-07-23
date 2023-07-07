import { useState, useEffect } from "react";

import styles from "./InputCheckbox.module.scss";

import { GrFormCheckmark } from "react-icons/gr";

const InputCheckbox = (props) => {
  const { checked } = props || null;

  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(isChecked);
  }, [isChecked]);

  return (
    <label className={styles.InputCheckbox}>
      <input
        type="checkbox"
        className={`${styles.Input} ${isChecked ? styles.InputActive : ""}`}
        defaultChecked={isChecked}
        onClick={() => {
          toggleCheckbox();
        }}
      />

      <span className={`${styles.Checked} ${isChecked ? styles.Active : ""}`}>
        <GrFormCheckmark />
      </span>
    </label>
  );
};

export default InputCheckbox;
