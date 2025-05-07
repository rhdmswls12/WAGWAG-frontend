import { ButtonProps } from '../Button.types';
import styles from './CategoryButton.module.scss';

export default function CategoryButton({ children, onClick, disabled }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}