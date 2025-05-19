import styles from "./ViewCount.module.scss";
import PlayGraySvg from "@/assets/images/PlayGray.svg";

interface ViewCountProps {
  count: number;
}
export const ViewCount = ({ count }: ViewCountProps) => {
  return (
    <div className={styles.viewCountGroup}>
      <PlayGraySvg />
      <div className={styles.viewCount}>{count}</div>
    </div>
  );
};
