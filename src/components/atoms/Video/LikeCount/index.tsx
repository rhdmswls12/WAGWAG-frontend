import HeartGray from "@/assets/images/HeartGray.svg";
import styles from "./LikeCount.module.scss";

type Props = {
  count: number;
};
export default function LikeCount({ count }: Props) {
  return (
    <div className={styles.likeCountGroup}>
      <HeartGray />
      <div className={styles.likeCount}>{count}</div>
    </div>
  );
}
