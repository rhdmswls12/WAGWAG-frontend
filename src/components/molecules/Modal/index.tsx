"use client";
import Typography from "@/components/atoms/Modal/Typography";
import Button from "@/components/atoms/Modal/Button";
import styles from "./Modal.module.scss";
import { useModalStore } from "@/stores";

export default function Modal() {
  const {
    isOpen,
    modalType,
    title,
    confirmText,
    cancelText,
    link,
    closeModal,
  } = useModalStore();

  if (!isOpen) return null;

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      alert("링크가 복사되었습니다!");
    } catch {
      alert("복사에 실패했습니다.");
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div
        className={`${styles.modalContent} ${modalType === "share" ? styles.shareModal : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
        {/* 아이콘 필요 */}
        <Typography>{title}</Typography>
        <div className={styles.buttonGroup}>
          {modalType === "share" && (
            <div className={styles.shareBox}>
              <input
                className={styles.shareInput}
                type="text"
                value={link}
                readOnly
              />
              <button className={styles.copyButton} onClick={handleCopy}>
                복사
              </button>{" "}
              {/* 아이콘 필요 */}
            </div>
          )}
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
