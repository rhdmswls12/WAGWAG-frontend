import styles from "./ProfileNickname.module.scss";

interface NicknameProps {
  name: string;
}
export const ProfileNickname = ({ name }: NicknameProps) => {
  return <div className={styles.name}>{name}</div>;
};
