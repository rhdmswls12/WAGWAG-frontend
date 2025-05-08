import { ButtonProps } from "../Button.types";
import styles from "./CategorySelectButton.module.scss";

export default function CategorySelectButton({
  children,
  onClick,
  disabled,
}: ButtonProps) {
  //이렇게 가져다 쓰세요~
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
