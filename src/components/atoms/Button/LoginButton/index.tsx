import { ButtonProps } from "../Button.types";
import styles from "./LoginButton.module.scss";

export const LoginButton = ({ children, onClick, disabled }: ButtonProps) => {
  //이렇게 가져다 쓰세요~
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      <img src="/googleLogo.svg" alt="" className={styles.icon} />
      <span className={styles.text}>{children}</span>
    </button>
  );
};
