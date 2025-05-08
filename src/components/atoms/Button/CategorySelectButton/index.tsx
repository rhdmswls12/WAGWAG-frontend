import { ButtonProps } from "../Button.types";
import styles from "./CategorySelectButton.module.scss";

export default function CategorySelectButton({
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
