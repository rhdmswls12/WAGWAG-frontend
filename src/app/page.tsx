import styles from "./page.module.css";
import LoginPage from "@/app/login/page";
// import Button from "@/components/atoms/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <LoginPage />
      <Link href="/example">{/* <Button /> */}</Link>
    </div>
  );
}
