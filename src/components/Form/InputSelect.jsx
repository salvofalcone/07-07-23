import styles from "./InputSelect.module.scss";

const InputSelect = (props) => {
  const { options, defaultValue, handleChange } = props || null;

  return (
    <div className={styles.selectContainer}>
      {options && (
        <select
          name={options?.name}
          id={options?.id}
          className={styles.selectElement}
          defaultValue={defaultValue}
          onChange={(e) => handleChange(e.target.value)}>
          {options?.options?.map((option) => (
            <option key={option?.id} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default InputSelect;
