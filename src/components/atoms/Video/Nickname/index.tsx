import styles from "./Nickname.module.scss";

interface NickNameProps {
  name: string;
}
export const Nickname = ({ name }: NickNameProps) => {
  return <span className={styles.nickname}>{name}</span>;
};
