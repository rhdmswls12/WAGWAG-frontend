"use client";
import { useRouter } from "next/navigation";
import styles from "./Login.module.scss";
import LoginButton from "@/components/atoms/Button/LoginButton";
import { useState } from "react";
import WagleSegmentToggle from "@/components/atoms/Button/WagleSegmentToggle";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"popular" | "all">("popular");

  return (
    <>
      <div className={styles.container}>
        <WagleSegmentToggle mode={mode} onChange={setMode} />{" "}
        <LoginButton onClick={() => router.push("./onboarding/nickname")}>
          구글로 시작하기
        </LoginButton>
      </div>
    </>
  );
}
