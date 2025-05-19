import styles from "./ProfileMenuButton.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ProfileImage, ProfileNickname } from "@/components/atoms";

interface ProfileMenuButtonProps {
  imageUrl: string;
  name: string;
  href: string;
}

export const ProfileMenuButton = ({
  imageUrl,
  name,
  href,
}: ProfileMenuButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${styles.profile} ${isActive ? styles.active : ""}`}
    >
      <ProfileImage imageUrl={imageUrl} alt={name} />
      <ProfileNickname name={name} />
    </Link>
  );
};
