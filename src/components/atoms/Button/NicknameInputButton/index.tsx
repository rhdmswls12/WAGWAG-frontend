import { ButtonProps } from "../Button.types";
import styles from "./NicknameInputButton.module.scss";

export default function NicknameInputButton({
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
