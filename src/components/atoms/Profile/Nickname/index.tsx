import styles from "./Nickname.module.scss";

interface NicknameProps {
  name: string;
}
export default function Nickname({ name }: NicknameProps) {
  return <div className={styles.name}>{name}</div>;
}
