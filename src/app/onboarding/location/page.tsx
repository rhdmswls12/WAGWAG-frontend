"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Location.module.scss";
import { SEOUL_REGIONS } from "@/constants/regions";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { CategorySelectButton } from "@/components/atoms/Button/CategorySelectButton";
import OnboardingStepIndicator from "@/components/atoms/OnboardingStep/StepIndicator";

export default function LocationPage() {
  const [selected, setSelected] = useState(false);
  const router = useRouter();
  return (
    <>
      <img className={styles.wagLogo} src="/wagwagLogo.svg" alt="WAGWAGLOGO" />
      <div className={styles.container}>
        <h1 className={styles.guideText}>waggle님의 지역을 설정해 주세요</h1>
        <h2 className={styles.helperText}>
          * 내 지역을 기반으로 와글을 볼 수 있어요
        </h2>
        <div className={styles.columns}>
          <CategorySelectButton
            isSelected={selected}
            onClick={() => setSelected((prev) => !prev)}
          >
            강남구
          </CategorySelectButton>
        </div>
        <ActionButton
          className={styles.actionButton}
          onClick={() => router.push("./category")}
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
