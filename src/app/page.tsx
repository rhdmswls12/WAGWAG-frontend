import styles from "./page.module.css";
import Button from "@/components/atoms/Button";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/example">
        <Button />
      </Link>
    </div>
  );
}
