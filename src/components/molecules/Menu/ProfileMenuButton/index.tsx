import ProfileImage from "@/components/atoms/Profile/ProfileImage";
import styles from "./ProfileMenuButton.module.scss";
import Nickname from "@/components/atoms/Profile/Nickname";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ProfileMenuButtonProps {
  imageUrl: string;
  name: string;
  href: string;
}

export default function ProfileMenuButton({
  imageUrl,
  name,
  href,
}: ProfileMenuButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${styles.profile} ${isActive ? styles.active : ""}`}
    >
      <ProfileImage imageUrl={imageUrl} alt={name} />
      <Nickname name={name} />
    </Link>
  );
}
