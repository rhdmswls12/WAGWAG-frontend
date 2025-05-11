import styles from "./page.module.css";
// import Button from "@/components/atoms/Button";
import ModalButton from "@/components/atoms/ModalButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <ModalButton variant="hover">예</ModalButton>
    </div>
  );
}
