import Image from "next/image";
import styles from "./VideoCard.module.scss";
import { VideoInfo } from "@/components/molecules";

interface VideoCardProps {
  thumbnailUrl: string;
  nickname: string;
  views: number;
  likes: number;
  title: string;
}
export const VideoCard = ({
  thumbnailUrl,
  nickname,
  views,
  likes,
  title,
}: VideoCardProps) => {
  return (
    <div className={styles.videoCardContainer}>
      <div className={styles.thumbnailContainer}>
        <VideoInfo nickname={nickname} views={views} likes={likes} />
        <Image src={thumbnailUrl} alt={title} width={236} height={340} />
      </div>
      <p className={styles.videoTitle}>{title}</p>
    </div>
  );
};
