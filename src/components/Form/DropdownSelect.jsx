import { useState } from "react";

import styles from "./DropdownSelect.module.scss";

const DropdownSelect = (props) => {
  const { options, handleChange } = props || null;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  const handleValue = (option) => {
    handleChange(option);
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdown}
        onClick={() => {
          setOpen(!open);
        }}>
        {selected ? selected?.label : "Choose an option"}
      </div>

      {options && (
        <ul className={`${styles.options} ${open ? styles.open : ""}`}>
          {options?.options?.map((option) => (
            <li
              className={styles.option}
              key={option?.id}
              onClick={() => handleValue(option)}>
              {option?.label}
            </li>
          ))}
        </ul>
      )}

      {/* 
      <div
        className={`${styles.options} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}>
        {open && (
          <ul className={styles.options}>
            <li>Basket</li>
            <li>Soccer</li>
            <li>Run</li>
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default DropdownSelect;
