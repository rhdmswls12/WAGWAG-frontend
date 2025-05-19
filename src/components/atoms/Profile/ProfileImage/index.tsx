import Image from "next/image";
import styles from "./ProfileImage.module.scss";
import { StaticImageData } from "next/image";

interface ProfileImageProps {
  imageUrl: string | StaticImageData;
  alt: string;
}
export default function ProfileImage({ imageUrl, alt }: ProfileImageProps) {
  return (
    <div className={styles.imageWrapper}>
      <Image src={imageUrl} alt={alt} fill className={styles.image} />
    </div>
  );
}
