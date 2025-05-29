"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Location.module.scss";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { CategorySelectButton } from "@/components/atoms/Button/CategorySelectButton";

export default function LocationPage() {
  const [selected, setSelected] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <CategorySelectButton
          isSelected={selected}
          onClick={() => setSelected((prev) => !prev)}
        >
          강남구
        </CategorySelectButton>{" "}
        <ActionButton onClick={() => router.push("./category")}>
          확인
        </ActionButton>
      </div>
    </>
  );
}
