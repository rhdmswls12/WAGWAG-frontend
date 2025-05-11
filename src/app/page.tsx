"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useModalStore } from "@/stores";

export default function Home() {
  const { openModal } = useModalStore();

  const handleOpenModal = () => {
    // 1. 링크 복사용 모달
    // openModal(
    //   "share",
    //   "와글 공유하기",
    //   undefined,
    //   undefined,
    //   "https://www.youtube.com/watch?v=abc"
    // );
    // 2. 삭제 여부
    // openModal("confirm", "와글을 삭제하시겠습니까?");
    // 3. 경고용 모달
    openModal("confirm", "와글 업로드 영상 용량이 초과되었습니다.");
  };
  return (
    <div className={styles.page}>
      <Link href="/example">{/* <Button /> */}</Link>
      <button onClick={handleOpenModal}>모달 열기</button>
    </div>
  );
}
