import HeartGray from "@/assets/images/HeartGray.svg";
import styles from "./LikeCount.module.scss";

interface LikeCountProps {
  count: number;
}
export const LikeCount = ({ count }: LikeCountProps) => {
  return (
    <div className={styles.likeCountGroup}>
      <HeartGray />
      <div className={styles.likeCount}>{count}</div>
    </div>
  );
};
