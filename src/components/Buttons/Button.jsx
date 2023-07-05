import styles from "./Button.module.scss";
import { HiArrowRight } from "react-icons/hi2";

const Button = (props) => {
  const { icon, iconLeft, label, outline, size, square, roundness } =
    props || null;

  /* 
  Ci serve:
  - icon position left/right
  - fill o outline

  - size 
  - xs sm md xl

  - disable
  - roundness
  */

  return (
    <div className={styles.Container}>
      <button
        className={`
        ${styles.Button} 
        ${iconLeft ? styles.IconLeft : ""}  
        ${outline ? styles.Outline : styles.Fill} 
        ${size ? styles[size] : styles.md}
        ${square ? styles.Square : styles.default}
        ${roundness ? styles[roundness] : styles.Sharp}
        `}>
        {/*************** LABEL ***************/}
        {/* {label ? label : "Non arriva nulla!"} */}
        {/* Oppure {label && label} */}
        {label && !square && label}

        {/************** ICON **************/}
        {/* {iconLeft ? "icona a sinistra" : "destra"} */}
        {icon && (
          <div>
            <HiArrowRight
              onClick={() =>
                alert(
                  "WOW, sei il 7932892953 visitatore! Complimenti, hai vinto un iPhone!"
                )
              }
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default Button;
