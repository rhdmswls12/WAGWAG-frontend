"use client";
import Typography from "@/components/atoms/Modal/Typography";
import Button from "@/components/atoms/Modal/Button";
import styles from "./Modal.module.scss";
import { useModalStore } from "@/stores";

export default function Modal() {
  const { isOpen, modalType, title, confirmText, cancelText, closeModal } =
    useModalStore();

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
        <Typography>{title}</Typography>
        <div className={styles.buttonGroup}>
          {modalType === "alert" && <Button onClick={closeModal}>닫기</Button>}
          {modalType === "confirm" && (
            <>
              <Button onClick={closeModal} variant="confirm">
                {confirmText}
              </Button>
              <Button onClick={closeModal} variant="default">
                {cancelText}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
