"use client";
import { useRouter } from "next/navigation";
import styles from "./Location.module.scss";
import ActionButton from "@/components/atoms/Button/ActionButton";
import CategorySelectButton from "@/components/atoms/Button/CategorySelectButton";

export default function LocationPage() {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <CategorySelectButton>운동</CategorySelectButton>
        <ActionButton onClick={() => router.push("./category")}>
          확인
        </ActionButton>
      </div>
    </>
  );
}
