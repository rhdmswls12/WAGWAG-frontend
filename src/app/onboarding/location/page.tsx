"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Location.module.scss";
import { SEOUL_REGIONS } from "@/constants/regions";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import OnboardingStepIndicator from "@/components/atoms/OnboardingStep/StepIndicator";

export default function LocationPage() {
  const [selectedGu, setSelectedGu] = useState<string | null>("강남구");
  const [selectedDong, setSelectedDong] = useState<string | null>(null);
  const dongList = selectedGu ? SEOUL_REGIONS[selectedGu] : [];
  const guList = Object.keys(SEOUL_REGIONS);
  const router = useRouter();

  return (
    <>
      <img className={styles.wagLogo} src="/wagwagLogo.svg" alt="WAGWAGLOGO" />
      <div className={styles.container}>
        <h1 className={styles.guideText}>waggle님의 지역을 설정해 주세요</h1>
        <h2 className={styles.helperText}>
          * 내 지역을 기반으로 와글을 볼 수 있어요
        </h2>

        <div className={styles.columns01}>
          <div className={styles.wrapper}>
            {/* 시 · 도 */}
            <div className={styles.columns02}>
              <h3 className={styles.sectiontitle}>시 · 도</h3>
              <h3 className={styles.seoultext}>서울</h3>
            </div>

            <div className={styles.line}></div>

            {/* 구 · 군 · 시 */}
            <div className={styles.guList} style={{ width: "45rem" }}>
              <h3 className={styles.sectiontitle}>구 · 군 · 시</h3>
              {guList.map((gu) => (
                <button
                  key={gu}
                  className={`${styles.guButton} ${selectedGu === gu ? styles.active : ""}`}
                  onClick={() => {
                    setSelectedGu(gu);
                    setSelectedDong(null);
                  }}
                >
                  {gu}
                </button>
              ))}
            </div>

            {/* 동 · 읍 · 면 */}
            <div className={styles.guList} style={{ width: "46.4rem" }}>
              <h3 className={styles.sectiontitle}>동 · 읍 · 면</h3>
              {dongList.map((dong) => (
                <button
                  key={dong}
                  className={`${styles.guButton} ${selectedDong === dong ? styles.active : ""}`}
                  onClick={() => setSelectedDong(dong)}
                >
                  {dong}
                </button>
              ))}
            </div>
          </div>
        </div>

        <ActionButton
          className={styles.actionButton}
          onClick={() => router.push("./category")}
          disabled={!selectedGu || !selectedDong}
        >
          확인
        </ActionButton>

        <div className={styles.stepcontainer}>
          <OnboardingStepIndicator />
        </div>
      </div>
    </>
  );
}
