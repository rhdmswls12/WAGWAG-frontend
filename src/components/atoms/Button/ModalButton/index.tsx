import { ButtonProps } from "../Button.types";
import styles from "./ModalButton.module.scss";

type ButtonVariant = "confirm" | "default";

interface ModalButtonProps extends ButtonProps {
  variant?: ButtonVariant;
}

export default function ModalButton({
  children,
  variant = "default",
  ...rest
}: ModalButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
}
