import styles from "./ModalTypography.module.scss";

interface TypographyProps {
  children: React.ReactNode;
}
export default function ModalTypography({ children }: TypographyProps) {
  return <div className={styles.title}>{children}</div>;
}
