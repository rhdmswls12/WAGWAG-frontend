import styles from "./page.module.css";
import Link from "next/link";
// import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Modal";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/example">{/* <Button /> */}</Link>
      <Modal type="confirm" title="와글을 삭제하시겠습니까?" />
    </div>
  );
}
