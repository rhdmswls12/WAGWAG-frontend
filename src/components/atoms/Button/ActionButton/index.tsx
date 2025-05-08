import { ButtonProps } from "../Button.types";
import styles from "./ActionButton.module.scss";

export default function ActionButton({
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
