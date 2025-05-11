import styles from "./Typography.module.scss";

interface TypographyProps {
  children: React.ReactNode;
}
export default function Typography({ children }: TypographyProps) {
  return <div className={styles.title}>{children}</div>;
}
