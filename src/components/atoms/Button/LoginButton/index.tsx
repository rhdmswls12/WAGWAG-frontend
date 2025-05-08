import { ButtonProps } from "../Button.types";
import styles from "./LoginButton.module.scss";

export default function LoginButton({
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
