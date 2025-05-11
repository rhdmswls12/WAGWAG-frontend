import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";
export default function Button({
  children,
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
}
