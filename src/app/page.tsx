"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useModalStore } from "@/stores";

export default function Home() {
  const { openModal, isOpen } = useModalStore();

  const handleOpenModal = () => {
    console.log(isOpen);
    openModal("share", "와글을 삭제하시겠습니까?");
  };
  return (
    <div className={styles.page}>
      <Link href="/example">{/* <Button /> */}</Link>
      <button onClick={handleOpenModal}>모달 열기</button>
    </div>
  );
}
