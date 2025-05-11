import { ModalButtonProps } from "./ModalButton.types";
import styles from "./ModalButton.module.scss";
export default function ModalButton({
  children,
  variant = "default",
}: ModalButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
