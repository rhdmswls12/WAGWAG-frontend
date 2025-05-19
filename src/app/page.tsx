"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useModalStore } from "@/stores";
import { ProfileMenuButton, VideoCard } from "@/components/molecules";

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
    openModal("confirm", "와글을 삭제하시겠습니까?");
    // 3. 경고용 모달
    // openModal("confirm", "와글 업로드 영상 용량이 초과되었습니다.");
  };
  return (
    <div className={styles.page}>
      <Link href="/example">{/* <Button /> */}</Link>
      <button onClick={handleOpenModal}>모달 열기</button>
      <VideoCard
        thumbnailUrl={"/nature.jpg"}
        nickname="SONN"
        views={13000}
        likes={1000}
        title="대현문화공원 앞에 버스킹 실력자"
      />
      <ProfileMenuButton imageUrl="/nature.jpg" name="waggle" href="/mypage" />
    </div>
  );
}
