"use client";
import { useRouter } from "next/navigation";
import styles from "./Category.module.scss";
import ActionButton from "@/components/atoms/Button/ActionButton";
import CategorySelectButton from "@/components/atoms/Button/CategorySelectButton";

export default function CategoryPage() {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <CategorySelectButton>운동</CategorySelectButton>
        <ActionButton onClick={() => router.push("../main")}>확인</ActionButton>
      </div>
    </>
  );
}
