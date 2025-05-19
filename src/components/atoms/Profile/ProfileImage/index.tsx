import Image from "next/image";
import styles from "./ProfileImage.module.scss";

interface ProfileImageProps {
  imageUrl: string;
  alt: string;
}
export const ProfileImage = ({ imageUrl, alt }: ProfileImageProps) => {
  return (
    <div className={styles.imageWrapper}>
      <Image src={imageUrl} alt={alt} fill className={styles.image} />
    </div>
  );
};
