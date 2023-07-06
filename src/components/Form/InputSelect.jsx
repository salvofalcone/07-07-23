import styles from "./InputSelect.module.scss";

const InputSelect = (props) => {
  const { options, defaultValue, handleChange } = props || null;

  return (
    <div className={styles.selectContainer}>
      {options && (
        <select
          name="products"
          id="products"
          className={styles.selectElement}
          defaultValue={defaultValue}>
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