import { useState } from "react";

import styles from "./InputToggle.module.scss";

const Form = ({ toggled }) => {
  const [isToggled, setIsToggled] = useState(toggled);
  const onHandleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <label className={styles.InputToggle}>
      <input
        type="checkbox"
        className={styles.Input}
        defaultChecked={isToggled}
        onClick={() => onHandleToggle()}
      />
      <span className={styles.Toggle} />
    </label>
  );
};

export default Form;
