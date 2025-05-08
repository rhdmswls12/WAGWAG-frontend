import { ButtonProps } from "../Button.types";
import styles from "./CategoryButton.module.scss";

export default function CategoryButton({
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
