"use client";
import { useState } from "react";
import styles from "./page.module.css";
import ActionButton from "@/components/atoms/Button/ActionButton";
import CategoryButton from "@/components/atoms/Button/CategoryButton";
import CategorySelectButton from "@/components/atoms/Button/CategorySelectButton";
import LoginButton from "@/components/atoms/Button/LoginButton";
import NicknameInputButton from "@/components/atoms/Button/NicknameInputButton";
import VisibilityToggleButton from "@/components/atoms/Button/VisibilityToggleButton";

import Link from "next/link";

export default function Home() {
  const [isPublic, setIsPublic] = useState(true);

  const handleToggle = () => {
    setIsPublic((prev) => !prev);
  };
  
  return (
    <div className={styles.page}>
      <ActionButton children={"확인"} onClick={() => {}} />
      <CategoryButton children={"운동"} onClick={() => {}} />
      <CategorySelectButton children={"운동"} onClick={() => {}} />
      <LoginButton children={"구글로 시작하기"} onClick={() => {}} />
      <NicknameInputButton
        children={"닉네임을 입력하세요"}
        onClick={() => {}}
      />
      <VisibilityToggleButton isPublic={isPublic} onClick={handleToggle} />
    </div>
  );
}
