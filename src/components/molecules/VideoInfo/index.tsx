import Nickname from "@/components/atoms/Video/Nickname";
import styles from "./VideoInfo.module.scss";
import ViewCount from "@/components/atoms/Video/ViewCount";
import LikeCount from "@/components/atoms/Video/LikeCount";

interface VideoInfoProps {
  nickname: string;
  views: number;
  likes: number;
}
export default function VideoInfo({ nickname, views, likes }: VideoInfoProps) {
  return (
    <div className={styles.videoInfoContainer}>
      <div className={styles.videoInfoTop}>
        <ViewCount count={views} />
      </div>
      <div className={styles.videoInfoBottom}>
        <Nickname name={nickname} />
        <LikeCount count={likes} />
      </div>
    </div>
  );
}
