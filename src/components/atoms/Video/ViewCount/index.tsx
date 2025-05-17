import styles from "./ViewCount.module.scss";
import PlaySvg from "@/assets/images/Play.svg";

type Props = {
  count: number;
};
export default function ViewCount({ count }: Props) {
  return (
    <div className={styles.viewCountGroup}>
      <PlaySvg />
      <div className={styles.viewCount}>{count}</div>
    </div>
  );
}
