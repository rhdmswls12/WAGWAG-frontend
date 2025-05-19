import styles from "./ModalTypography.module.scss";

interface TypographyProps {
  children: React.ReactNode;
}
export const ModalTypography = ({ children }: TypographyProps) => {
  return <div className={styles.title}>{children}</div>;
};
