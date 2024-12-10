import styles from "./Buttons.module.css";

const Buttons = ({onButtonClick}) => {
    const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/' , '=', '9', '0', '.']

  return (
    <div className={styles["buttonsContainer"]}>
        {buttons.map((item) => (
            <button className={styles["k-btn"]} onClick={() => onButtonClick(item)} key={item}>{item}</button>
        ))}
    </div>
  );
};

export default Buttons;
